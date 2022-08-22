import pandas as pd

def results_checker(original_df, actuals, predictions, class_column, check_column, cutoff):
    test = pd.DataFrame(actuals)
    preds = pd.DataFrame(predictions, columns = ['preds'])
    preds = preds.set_index(test.index)
    results = test.merge(preds, how = 'left', left_index=True, right_index=True)
    check = results.merge(original_df[check_column], how = 'left', left_index=True, right_index=True, )
    positives =check[check['preds']==1].sort_values([check_column])
    missclassified = positives[positives[class_column]==0]
    quantiles = [.9,.75,.5,.49,.25,.10]
    wrong_counties = missclassified.preds.count()
    total_counties = preds['preds'].count()
    pct_wrong = round(wrong_counties/total_counties*100,3)
    print(f'Cutoff point for a "high" classification: {round(cutoff,3)}%')
    print(f'Total count of missclassified counties: {wrong_counties}, or {pct_wrong}% of {total_counties} counties')
    for q in quantiles:
        if q>=.5:
            above = (missclassified.loc[missclassified[check_column]>original_df[check_column].quantile(q)].count())[check_column]
            print(f'Count of missclassified counties that are above the {q} quantile ({round(original_df[check_column].quantile(q),3)}%): {above}')
        else:
            below = (missclassified.loc[missclassified[check_column]<original_df[check_column].quantile(q)].count())[check_column]
            print(f'Count of missclassified counties that are below the {q} quantile ({round(original_df[check_column].quantile(q),3)}%): {below}')