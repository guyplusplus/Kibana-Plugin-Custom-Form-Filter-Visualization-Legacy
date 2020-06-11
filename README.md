# Kibana Plugin - Custom Form Filter Visualization - Legacy Architecture

This plugin is built and compiled for Kibana **v7.6.2**. It is in a legacy format, not compatible for Kibana 7.7 onward. Also as the APIs are very volitile, under work toward the new plugin modern architecture, the code does not work for v7.7.0 nor v7.7.1.

The plugin is based on [kbn_tp_custom_visualizations](https://github.com/elastic/kibana/tree/v7.6.2/test/plugin_functional/plugins/kbn_tp_custom_visualizations).

Please refer to **[this repository](https://github.com/guyplusplus/Kibana-Plugin-Custom-Form-Filter-Visualization) for the main content**.

## Packaging the plugin as a zip file

Simply add the plugin directory inside a `kibana` folder and zip the file. Filename format carries the Kibana version (i.e. 7.6.0) followed by the plugin version (i.e. 1.0.0). Do not include the `kbn_tp_custom_form_filter_accounts/target` directory in the zip file.

The zip structure is

```
kbn_tp_custom_form_filter_accounts_7.6.0_1.0.0.zip
  kibana/
    kbn_tp_custom_form_filter_accounts/
      package.json
      config.js
      public/
        ...
      server/
        ...
```

## Installing the plugin

The plugin can then be installed like this either locally or remotely.

```
$ sudo ./bin/kibana-plugin --allow-root install file:///home/john/downloads/kbn_tp_custom_form_filter_accounts_7.6.0_1.0.0.zip
$ sudo ./bin/kibana-plugin --allow-root install https://github.com/guyplusplus/Kibana-Plugin-Custom-Form-Filter-Visualization-Legacy/releases/download/1.0.0/kbn_tp_custom_form_filter_accounts_7.6.0_1.0.0.zip
```

Deleting then installing the plugin often fails for me. I fix it by running this command.

```
$ sudo ./bin/kibana-plugin --allow-root remove kbn_tp_custom_form_filter_accounts
Removing kbn_tp_custom_form_filter_accounts...
Plugin removal complete
$ sudo rm -rf /usr/share/kibana/optimize/bundles
```
