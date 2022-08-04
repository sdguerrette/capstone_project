"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["element-registry"],{64519(a,b,c){let d=new Map,e=new Promise(a=>{"interactive"===document.readyState||"complete"===document.readyState?a():document.addEventListener("DOMContentLoaded",()=>a(),{once:!0})}),f=new Promise(a=>{let b=()=>{a(),document.removeEventListener("click",b),document.removeEventListener("touchstart",b),document.removeEventListener("keydown",b)};document.addEventListener("click",b),document.addEventListener("touchstart",b,{passive:!0}),document.addEventListener("keydown",b)}),g={ready:e,firstInteraction:f},h=new WeakMap;function i(a=document.body){cancelAnimationFrame(h.get(a)||0),h.set(a,requestAnimationFrame(()=>{for(let b of d.keys()){let c=a.matches(b)?a:a.querySelector(b);if(customElements.get(b)||c){let e=c?.getAttribute("data-load-on")||"ready",f=e in g?g[e]:g.ready;for(let i of d.get(b)||[])f.then(i);d.delete(b),h.delete(a)}}}))}let j=new MutationObserver(a=>{if(d.size)for(let b of a)for(let c of b.addedNodes)c instanceof Element&&i(c)});j.observe(document,{subtree:!0,childList:!0});let k=!0;function l(a,b){d.has(a)||d.set(a,[]),d.get(a).push(b),k&&i(document.body),k=!1}l("animated-image",()=>c.e("app_components_accessibility_animated-image-element_ts").then(c.bind(c,38410))),l("launch-code",()=>c.e("app_components_account_verifications_launch-code-element_ts").then(c.bind(c,34166))),l("metric-selection",()=>c.e("app_components_advisories_metric-selection-element_ts").then(c.bind(c,86585))),l("severity-calculator",()=>Promise.all([c.e("vendors-node_modules_selector-observer_dist_index_esm_js"),c.e("app_components_advisories_severity-calculator-element_ts")]).then(c.bind(c,85825))),l("downgrade-dialog",()=>Promise.all([c.e("vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-16f3e13"),c.e("app_components_billing_settings_downgrade-dialog-element_ts")]).then(c.bind(c,70862))),l("downgrade-survey-dialog",()=>c.e("app_components_billing_settings_downgrade-survey-dialog-element_ts").then(c.bind(c,12869))),l("create-branch",()=>Promise.all([c.e("vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js"),c.e("vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-57c13e3"),c.e("app_assets_modules_github_ref-selector_ts"),c.e("app_assets_modules_github_stats_ts-app_components_branch_create-branch-element_ts")]).then(c.bind(c,32858))),l("alert-dismissal-details",()=>c.e("app_components_code_scanning_alert-dismissal-details-element_ts").then(c.bind(c,68497))),l("sku-list",()=>c.e("app_components_codespaces_advanced_options_sku-list-element_ts").then(c.bind(c,81590))),l("create-button",()=>c.e("app_components_codespaces_create-button-element_ts").then(c.bind(c,38883))),l("command-palette-page",()=>Promise.all([c.e("vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_github_catalyst_lib-6e1996"),c.e("app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-7e29fd"),c.e("app_components_command_palette_command-palette-page-element_ts")]).then(c.bind(c,66611))),l("command-palette-page-stack",()=>Promise.all([c.e("vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_github_catalyst_lib-6e1996"),c.e("app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-7e29fd"),c.e("app_components_command_palette_command-palette-page-stack-element_ts")]).then(c.bind(c,27977))),l("query-search",()=>Promise.all([c.e("vendors-node_modules_selector-observer_dist_index_esm_js"),c.e("vendors-node_modules_lit-html_lit-html_js"),c.e("vendors-node_modules_lit-html_directives_until_js-node_modules_github_catalyst_lib_index_js-n-0b48d4"),c.e("app_assets_modules_github_form_ts-app_assets_modules_github_navigation_ts"),c.e("app_assets_modules_github_filter-input_ts"),c.e("app_assets_modules_github_dashboard_shortcuts_ts"),c.e("app_components_dashboard_query-search-element_ts")]).then(c.bind(c,26283))),l("deferred-diff-lines",()=>c.e("app_components_diffs_deferred-diff-lines-element_ts").then(c.bind(c,49853))),l("readme-toc",()=>c.e("app_components_files_readme-toc-element_ts").then(c.bind(c,63200))),l("delayed-loading",()=>c.e("app_components_github_delayed-loading-element_ts").then(c.bind(c,85409))),l("feature-callout",()=>c.e("app_components_github_feature-callout-element_ts").then(c.bind(c,88285))),l("reopen-button",()=>c.e("app_components_issues_reopen-button-element_ts").then(c.bind(c,81183))),l("math-renderer",()=>Promise.all([c.e("vendors-node_modules_lit-html_lit-html_js"),c.e("app_components_mathjax_math-renderer-element_ts")]).then(c.bind(c,21510))),l("allowed-values-input",()=>c.e("app_components_organizations_settings_codespaces_policy_form_constraint_row_allowed-values-in-672002").then(c.bind(c,80193))),l("max-value",()=>c.e("app_components_organizations_settings_codespaces_policy_form_constraint_row_max-value-element_ts").then(c.bind(c,49952))),l("codespaces-policy-form",()=>c.e("app_components_organizations_settings_codespaces-policy-form-element_ts").then(c.bind(c,96099))),l("insights-form",()=>c.e("app_components_organizations_settings_features_insights-form-element_ts").then(c.bind(c,55492))),l("action-list",()=>Promise.all([c.e("vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js"),c.e("app_components_primer_action_list_action-list-element_ts")]).then(c.bind(c,44975))),l("action-menu",()=>c.e("app_components_primer_action_menu_action-menu-element_ts").then(c.bind(c,33140))),l("split-page-layout",()=>c.e("app_components_primer_experimental_split-page-layout-element_ts").then(c.bind(c,53866))),l("toggle-switch",()=>c.e("app_components_primer_experimental_toggle-switch-element_ts").then(c.bind(c,11772))),l("iterate-focusable-elements.ts",()=>c.e("app_components_primer_modal_dialog_iterate-focusable-elements_ts").then(c.bind(c,35904))),l("modal-dialog",()=>c.e("app_components_primer_modal_dialog_modal-dialog-element_ts").then(c.bind(c,94525))),l("file-filter",()=>c.e("app_components_pull_requests_file_tree_file-filter-element_ts").then(c.bind(c,44537))),l("file-tree",()=>c.e("app_components_pull_requests_file_tree_file-tree-element_ts").then(c.bind(c,31980))),l("file-tree-toggle",()=>c.e("app_components_pull_requests_file_tree_file-tree-toggle-element_ts").then(c.bind(c,35306))),l("dependabot-alert-row",()=>c.e("app_components_repos_alerts_dependabot-alert-row-element_ts").then(c.bind(c,23820))),l("dependabot-alert-table-header",()=>c.e("app_components_repos_alerts_dependabot-alert-table-header-element_ts").then(c.bind(c,18843))),l("dependabot-alert-timeline",()=>c.e("app_components_repos_alerts_dependabot-alert-timeline-element_ts").then(c.bind(c,66706))),l("memex-project-picker",()=>Promise.all([c.e("vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-9dcad7"),c.e("app_components_repositories_memex_memex-project-picker-element_ts")]).then(c.bind(c,69883))),l("pin-organization-repo",()=>Promise.all([c.e("vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe"),c.e("app_components_repositories_pin-organization-repo-element_ts")]).then(c.bind(c,7673))),l("styled-text-input",()=>c.e("app_components_search_input_styled-text-input-element_ts").then(c.bind(c,68622))),l("common.ts",()=>c.e("app_components_search_parsing_common_ts").then(c.bind(c,81732))),l("parsing.ts",()=>Promise.all([c.e("vendors-node_modules_github_blackbird-parser_dist_blackbird_js"),c.e("app_components_search_parsing_parsing_ts-_c1300")]).then(c.bind(c,91691))),l("search-input",()=>Promise.all([c.e("vendors-node_modules_selector-observer_dist_index_esm_js"),c.e("vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hotkey_dist_index-9f48bd"),c.e("vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-d30067"),c.e("app_assets_modules_github_jump-to_ts"),c.e("app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_di-9b8a64"),c.e("app_components_search_suggestions_languages_ts"),c.e("app_components_search_search-input-element_ts")]).then(c.bind(c,60538))),l("blackbird.ts",()=>c.e("app_components_search_suggestions_blackbird_ts").then(c.bind(c,90684))),l("custom-scopes.ts",()=>c.e("app_components_search_suggestions_custom-scopes_ts").then(c.bind(c,18401))),l("default.ts",()=>c.e("app_components_search_suggestions_default_ts").then(c.bind(c,25183))),l("fixed-qualifiers.ts",()=>c.e("app_components_search_suggestions_fixed-qualifiers_ts").then(c.bind(c,41718))),l("history.ts",()=>c.e("app_components_search_suggestions_history_ts").then(c.bind(c,36121))),l("input.ts",()=>c.e("app_components_search_suggestions_input_ts").then(c.bind(c,56202))),l("languages.ts",()=>Promise.all([c.e("app_components_search_suggestions_languages_ts"),c.e("app_assets_modules_github_filter-sort_ts-app_assets_modules_github_fuzzy-filter_ts-node_modul-a3d633")]).then(c.bind(c,78303))),l("projects.ts",()=>Promise.all([c.e("vendors-node_modules_selector-observer_dist_index_esm_js"),c.e("vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hotkey_dist_index-9f48bd"),c.e("app_assets_modules_github_jump-to_ts"),c.e("app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_di-9b8a64"),c.e("node_modules_delegated-events_dist_index_js-app_components_search_suggestions_projects_ts")]).then(c.bind(c,87977))),l("repos.ts",()=>Promise.all([c.e("vendors-node_modules_selector-observer_dist_index_esm_js"),c.e("vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hotkey_dist_index-9f48bd"),c.e("app_assets_modules_github_jump-to_ts"),c.e("app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_di-9b8a64"),c.e("node_modules_delegated-events_dist_index_js-app_components_search_suggestions_repos_ts")]).then(c.bind(c,22536))),l("suggestions.ts",()=>c.e("app_components_search_suggestions_suggestions_ts").then(c.bind(c,64021))),l("teams.ts",()=>Promise.all([c.e("vendors-node_modules_selector-observer_dist_index_esm_js"),c.e("vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hotkey_dist_index-9f48bd"),c.e("app_assets_modules_github_jump-to_ts"),c.e("app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_di-9b8a64"),c.e("node_modules_delegated-events_dist_index_js-app_components_search_suggestions_teams_ts")]).then(c.bind(c,69430))),l("types.ts",()=>c.e("app_components_search_suggestions_types_ts").then(c.bind(c,26789))),l("project-picker",()=>Promise.all([c.e("vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js"),c.e("vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_memoize_dist_esm_index_-4f373e"),c.e("app_assets_modules_github_soft-nav_navigate_ts"),c.e("app_components_sidebar_project-picker-element_ts")]).then(c.bind(c,73209))),l("notification-indicator",()=>c.e("app_components_site_header_notification-indicator-element_ts").then(c.bind(c,26056))),l("slash-command-toolbar-button",()=>c.e("app_components_slash_commands_slash-command-toolbar-button-element_ts").then(c.bind(c,93732))),l("monthly-spend-graph",()=>Promise.all([c.e("vendors-node_modules_date-fns_esm__lib_assign_index_js-node_modules_date-fns_esm__lib_getTime-5cc5c7"),c.e("vendors-node_modules_github_base-chart-element_dist_base-chart_js"),c.e("app_components_sponsors_orgs_premium_dashboard_monthly-spend-graph-element_ts")]).then(c.bind(c,48365))),l("react-staffbar",()=>c.e("app_components_stafftools_react_react-staffbar-element_ts").then(c.bind(c,56990))),l("turbo-staffbar",()=>c.e("app_components_stafftools_turbo_turbo-staffbar-element_ts").then(c.bind(c,36551))),l("turbo-staffbar-preview",()=>Promise.all([c.e("vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js"),c.e("app_components_stafftools_turbo_turbo-staffbar-preview-element_ts")]).then(c.bind(c,85967))),l("themed-picture",()=>c.e("app_components_themed_pictures_themed-picture-element_ts").then(c.bind(c,15742))),l("tracking-block-api.ts",()=>c.e("app_components_tracking_blocks_tracking-block-api_ts").then(c.bind(c,17063))),l("tracking-block",()=>Promise.all([c.e("vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_jtml_lib_index_js"),c.e("app_components_tracking_blocks_tracking-block-element_ts")]).then(c.bind(c,17803))),l("tracking-block-omnibar",()=>c.e("app_components_tracking_blocks_tracking-block-omnibar-element_ts").then(c.bind(c,16556))),l("profile-pins",()=>Promise.all([c.e("vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe"),c.e("app_assets_modules_github_profile_profile-pins-element_ts")]).then(c.bind(c,87728))),l("emoji-picker",()=>c.e("app_assets_modules_github_emoji-picker-element_ts").then(c.bind(c,58364))),l("edit-hook-secret",()=>c.e("app_assets_modules_github_behaviors_edit-hook-secret-element_ts").then(c.bind(c,10523))),l("insights-query",()=>c.e("app_assets_modules_github_insights_insights-query_ts").then(c.bind(c,5443))),l("remote-clipboard-copy",()=>Promise.all([c.e("vendors-node_modules_selector-observer_dist_index_esm_js"),c.e("app_assets_modules_github_behaviors_remote-clipboard-copy_ts")]).then(c.bind(c,66453))),l("series-table",()=>c.e("app_assets_modules_github_insights_series-table_ts").then(c.bind(c,31747))),l("line-chart",()=>Promise.all([c.e("vendors-node_modules_date-fns_esm__lib_assign_index_js-node_modules_date-fns_esm__lib_getTime-5cc5c7"),c.e("vendors-node_modules_github_base-chart-element_dist_base-chart_js"),c.e("app_assets_modules_github_insights_line-chart_ts")]).then(c.bind(c,23762))),l("bar-chart",()=>Promise.all([c.e("vendors-node_modules_date-fns_esm__lib_assign_index_js-node_modules_date-fns_esm__lib_getTime-5cc5c7"),c.e("vendors-node_modules_github_base-chart-element_dist_base-chart_js"),c.e("app_assets_modules_github_insights_bar-chart_ts")]).then(c.bind(c,44682))),l("column-chart",()=>Promise.all([c.e("vendors-node_modules_date-fns_esm__lib_assign_index_js-node_modules_date-fns_esm__lib_getTime-5cc5c7"),c.e("vendors-node_modules_github_base-chart-element_dist_base-chart_js"),c.e("app_assets_modules_github_insights_column-chart_ts")]).then(c.bind(c,42560))),l("stacked-area-chart",()=>Promise.all([c.e("vendors-node_modules_date-fns_esm__lib_assign_index_js-node_modules_date-fns_esm__lib_getTime-5cc5c7"),c.e("vendors-node_modules_github_base-chart-element_dist_base-chart_js"),c.e("app_assets_modules_github_insights_stacked-area-chart_ts")]).then(c.bind(c,48826))),l("pulse-authors-graph",()=>Promise.all([c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("app_assets_modules_github_graphs_pulse-authors-graph-element_ts")]).then(c.bind(c,47256))),l("stacks-input-config-view",()=>Promise.all([c.e("vendors-node_modules_selector-observer_dist_index_esm_js"),c.e("vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe"),c.e("app_assets_modules_github_stacks_stacks-input-config-view_ts")]).then(c.bind(c,36286))),l("community-contributions-graph",()=>Promise.all([c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("vendors-node_modules_d3-array_src_extent_js-node_modules_d3-axis_src_axis_js-node_modules_d3--2aa225"),c.e("app_assets_modules_github_graphs_community-contributions_ts")]).then(c.bind(c,53946))),l("discussion-page-views-graph",()=>Promise.all([c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("app_assets_modules_github_graphs_discussion-page-views_ts")]).then(c.bind(c,98761))),l("discussions-daily-contributors",()=>Promise.all([c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("vendors-node_modules_d3-array_src_extent_js-node_modules_d3-axis_src_axis_js-node_modules_d3--2aa225"),c.e("app_assets_modules_github_graphs_discussions-daily-contributors_ts")]).then(c.bind(c,36187))),l("discussions-new-contributors",()=>Promise.all([c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("vendors-node_modules_d3-array_src_extent_js-node_modules_d3-axis_src_axis_js-node_modules_d3--2aa225"),c.e("app_assets_modules_github_graphs_discussions-new-contributors_ts")]).then(c.bind(c,46961))),l("code-frequency-graph",()=>Promise.all([c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("app_assets_modules_github_graphs_code-frequency-graph-element_ts")]).then(c.bind(c,3867))),l("contributors-graph",()=>Promise.all([c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("vendors-node_modules_d3-transition_src_index_js-node_modules_github_catalyst_lib_index_js-nod-ed7ac2"),c.e("vendors-node_modules_d3-array_src_descending_js-node_modules_d3-axis_src_axis_js-node_modules-5e7c48"),c.e("app_assets_modules_github_graphs_contributors-graph-element_ts")]).then(c.bind(c,67980))),l("org-insights-graph",()=>Promise.all([c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("vendors-node_modules_d3-array_src_bisector_js-node_modules_d3-axis_src_axis_js-node_modules_d-d500b3"),c.e("vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-57c13e2"),c.e("app_assets_modules_github_graphs_org-insights-graph-element_ts")]).then(c.bind(c,79873))),l("traffic-clones-graph",()=>Promise.all([c.e("vendors-node_modules_selector-observer_dist_index_esm_js"),c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("vendors-node_modules_d3-array_src_extent_js-node_modules_d3-axis_src_axis_js-node_modules_d3--2aa225"),c.e("app_assets_modules_github_d3_tip_ts-app_assets_modules_github_fetch_ts-app_assets_modules_git-962b01"),c.e("app_assets_modules_github_graphs_traffic-clones-graph-element_ts")]).then(c.bind(c,16859))),l("traffic-visitors-graph",()=>Promise.all([c.e("vendors-node_modules_selector-observer_dist_index_esm_js"),c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("vendors-node_modules_d3-array_src_extent_js-node_modules_d3-axis_src_axis_js-node_modules_d3--2aa225"),c.e("app_assets_modules_github_d3_tip_ts-app_assets_modules_github_fetch_ts-app_assets_modules_git-962b01"),c.e("app_assets_modules_github_graphs_traffic-visitors-graph-element_ts")]).then(c.bind(c,60323))),l("commit-activity-graph",()=>Promise.all([c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("vendors-node_modules_d3-transition_src_index_js-node_modules_github_catalyst_lib_index_js-nod-ed7ac2"),c.e("app_assets_modules_github_graphs_commit-activity-graph-element_ts")]).then(c.bind(c,64365))),l("marketplace-insights-graph",()=>Promise.all([c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("vendors-node_modules_d3-array_src_extent_js-node_modules_d3-axis_src_axis_js-node_modules_d3--2aa225"),c.e("app_assets_modules_github_d3_tip_ts-app_assets_modules_github_fetch_ts-app_assets_modules_git-962b01"),c.e("app_assets_modules_github_graphs_marketplace-insights-graph-element_ts")]).then(c.bind(c,58505))),l("user-sessions-map",()=>Promise.all([c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("vendors-node_modules_d3-transition_src_index_js-node_modules_github_catalyst_lib_index_js-nod-ed7ac2"),c.e("vendors-node_modules_d3-ease_src_circle_js-node_modules_d3-format_src_defaultLocale_js-node_m-21f734"),c.e("app_assets_modules_github_settings_user-sessions-map-element_ts")]).then(c.bind(c,44960))),l("reload-after-polling",()=>c.e("app_assets_modules_github_behaviors_reload-after-polling-element_ts").then(c.bind(c,80557))),l("package-dependencies-security-graph",()=>Promise.all([c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("app_assets_modules_github_graphs_package-dependencies-security-graph-element_ts")]).then(c.bind(c,7112))),l(".js-sub-dependencies",()=>c.e("app_assets_modules_github_dependencies_ts").then(c.bind(c,5708))),l("network-graph",()=>Promise.all([c.e("vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_catalyst_lib_inde-758ef9"),c.e("app_assets_modules_github_graphs_network-graph-element_ts")]).then(c.bind(c,72394))),l("business-audit-log-map",()=>Promise.all([c.e("vendors-node_modules_d3-array_src_max_js-node_modules_d3-scale_src_index_js-node_modules_d3-s-eaadf4"),c.e("vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js"),c.e("vendors-node_modules_d3-transition_src_index_js-node_modules_github_catalyst_lib_index_js-nod-ed7ac2"),c.e("vendors-node_modules_d3-ease_src_circle_js-node_modules_d3-format_src_defaultLocale_js-node_m-21f734"),c.e("app_assets_modules_github_soft-nav_navigate_ts"),c.e("app_assets_modules_github_business-audit-log-map-element_ts")]).then(c.bind(c,77244))),l("inline-machine-translation",()=>c.e("app_assets_modules_github_localization_inline-machine-translation-element_ts").then(c.bind(c,2943)))}},a=>{var b,c,d=(b=64519,a(a.s=64519))}])
//# sourceMappingURL=element-registry-40905a1235d0.js.map