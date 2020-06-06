# Kibana Plugin - Custom Form Filter Visualization 

This plugin is built and compiled for Kibana v7.6. It is in a legacy format, not compatible for Kibana 7.7 onward.

Please refer to [this repository](https://github.com/guyplusplus/Kibana-Plugin-Custom-Form-Filter-Visualization) for the main content.

## Building the plugin

Simply add the plugin directory inside a kibana folder and zip the file. The zip structure is

```
my-plugin_7.6.0.zip
  kibana/
    my-plugin/
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
$ rm -rf /usr/share/kibana/optimize/bundles
```
