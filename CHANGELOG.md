# Changelog

<!-- markdown-link-check-disable -->

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.0.0] - 2021-07-14

### Added

- Ruleset: New alternative ruleset format [#1615](https://github.com/stoplightio/spectral/issues/1615)
- Ruleset: ESLint-like Overrides [#1021](https://github.com/stoplightio/spectral/issues/1021)
- Ruleset: Path Aliases [#1680](https://github.com/stoplightio/spectral/issues/1680)
- Rulesets: OpenAPI (OAS) 3.1 support [#1302](https://github.com/stoplightio/spectral/issues/1302)
- Functions: `schema` function uses Ajv v8 under the hood and therefore support newer JSON Schema drafts [#1584](https://github.com/stoplightio/spectral/pull/1584)
- CLI: implement `--stdin-filepath` flag [#1001](https://github.com/stoplightio/spectral/issues/1001)
- Formats: JSON Schema Draft 2020-12 format [#1556](https://github.com/stoplightio/spectral/issues/1556)
- CLI: added pretty formatter for colored and wrapped cli output [#1580](https://github.com/stoplightio/spectral/pull/1580)
- Rulesets: Supports `x-nullable` for OAS2 [#1359](https://github.com/stoplightio/spectral/issues/1359)
- Rulesets: `oas3-unused-component` rule which detects all orphaned components [#1440](https://github.com/stoplightio/spectral/pull/1440)

### Changed

- Ruleset validation yields more understandable errors [#1637](https://github.com/stoplightio/spectral/issues/1637)
- CLI: demand some ruleset to be present [#1699](https://github.com/stoplightio/spectral/pull/1699)
- CLI: require valid commands and options [#1586](https://github.com/stoplightio/spectral/issues/1586)
- Core: revise `RulesetFunction` aka `IFunction` [#1685](https://github.com/stoplightio/spectral/pull/1685)
- Core: runtime exceptions are not swallowed [#1618](https://github.com/stoplightio/spectral/issues/1618)
- Rulesets: Certain oas{2,3}-valid-\*-example rules have been merged [#1313](https://github.com/stoplightio/spectral/pull/1313)
- Rulesets: more consistent linting messages in AsyncAPI & OpenAPI rulesets [#1619](https://github.com/stoplightio/spectral/issues/1619)
- Rulesets: `operation-2xx-response` rule has been renamed to `operation-success-response` and is no longer recommended [#1272](https://github.com/stoplightio/spectral/issues/1273)
- Rulesets: `openapi-tags` rule is no longer recommended [#1132](https://github.com/stoplightio/spectral/issues/1132)

### Fixed

- Core: Incorrect range when semicolons are present in a key [#1697](https://github.com/stoplightio/spectral/issues/1697)
- Core: Empty $refs should not be ignored [#1515](https://github.com/stoplightio/spectral/issues/1515)
- Rulesets: validate 'default' in schemas [#1402](https://github.com/stoplightio/spectral/issues/1402)

### Removed

- Support for Node 10.x [#1542](https://github.com/stoplightio/spectral/pull/1542)
- Functions: `schemaPath` function [#1621](https://github.com/stoplightio/spectral/issues/1621)
- CLI: `--skip-rule` and `--show-unmatched-globs` flags [#1560](https://github.com/stoplightio/spectral/pull/1560)
- Core: exceptions [#1675](https://github.com/stoplightio/spectral/pull/1675)
- Rulesets: `operation-default-response` rule [#1304](https://github.com/stoplightio/spectral/pull/1304)

## [5.9.1] - 2021-04-08

### Fixed

- `duplicated-entry-in-enum` rule complains about `enum` property in objects [#1571](https://github.com/stoplightio/spectral/issues/1571)
- Dependencies upgrade, including `proxy-agent` [#1552](https://github.com/stoplightio/spectral/issues/1552)

## [5.9.0] - 2021-03-08

### Added

- Add `duplicated-entry-in-enum` rule to detect duplicated entry in enum [#1478](https://github.com/stoplightio/spectral/issues/1478)
- Improve `additionalProperties` JSON Schema validation [#1433](https://github.com/stoplightio/spectral/pull/1433)

### Changed

- $refs in rulesets linking to json-schema.org are kept unresolved [#1519](https://github.com/stoplightio/spectral/pull/1519)

### Fixed

- Empty $refs should not be ignored [#1540](https://github.com/stoplightio/spectral/pull/1540)
- Proper source detection of an error caused by an empty $ref [#1515](https://github.com/stoplightio/spectral/issues/1515)
- Improve file $ref resolving on Windows [#1514](https://github.com/stoplightio/spectral/pull/1514)
- Proxy settings not applied to all outgoing requests [#1324](https://github.com/stoplightio/spectral/issues/1324)
- Pascal/Camel `casing` do not support single uppercase letters at the end [#1500](https://github.com/stoplightio/spectral/issues/1500)
- Nested extends broken in rulesets Error disabling an extended ruleset in an extended ruleset [#1352](https://github.com/stoplightio/spectral/issues/1352), [#1380](https://github.com/stoplightio/spectral/issues/1380)
- Missing validation of child parameter child properties [#1400](https://github.com/stoplightio/spectral/issues/1400)

## [5.8.1] - 2021-02-11

### Fixed

- Address Immer potential security vulnerability, as well as update a few other dependencies [#1499](https://github.com/stoplightio/spectral/issues/1499)

## [5.8.0] - 2021-01-04

### Added

- CLI: add JSON path to stylish formatter [#1382](https://github.com/stoplightio/spectral/pull/1382)
- Support optional pointers and sources in `except` [#1405](https://github.com/stoplightio/spectral/pull/1405), [#1423](https://github.com/stoplightio/spectral/pull/1423)

### Fixed

- OpenAPI `path-params` rule flags parameter override definitions as duplicate [#1416](https://github.com/stoplightio/spectral/issues/1416)
- Falsy OpenAPI `example` fields are validated correctly [#1418](https://github.com/stoplightio/spectral/pull/1418)
- OpenAPI examples in examples is asked to be OpenAPI compliant [#1406](https://github.com/stoplightio/spectral/issues/1406)
- Allow single trailing slash for OpenAPI 3 server url [#1427](https://github.com/stoplightio/spectral/pull/1427)
- Friendly error is thrown for empty ruleset [#1407](https://github.com/stoplightio/spectral/issues/1407)
- Various general improvements for OpenAPI rules using custom functions [#1362](https://github.com/stoplightio/spectral/pull/1362)

## [5.7.2] - 2020-12-10

### Fixed

- Documentation URL in rulesets point at legacy Stoplight platform [#1395](https://github.com/stoplightio/spectral/pull/1395)

## [5.7.0] - 2020-11-01

### Added

- Introduce parser options [#1350](https://github.com/stoplightio/spectral/issues/1350)
- Allow `documentationUrl` to be specified for each rule [#1356](https://github.com/stoplightio/spectral/issues/1356)
- CLI: new `--fail-on-unmatched-globs` flag [#1117](https://github.com/stoplightio/spectral/issues/1117)

### Deprecated

- CLI: `--fail-on-unmatched-globs` should be used instead of `--show-unmatched-globs`

### Fixed

- CLI: JUnit formatter respects fail-severity [#935](https://github.com/stoplightio/spectral/issues/935)
- Respect nullable in case of OAS3 document [#1353](https://github.com/stoplightio/spectral/issues/1353)
- Schema function handles non-string enum values [#1377](https://github.com/stoplightio/spectral/pull/1377)
- `oas-valid-example` ignores externalValue [#1379](https://github.com/stoplightio/spectral/pull/1379)
- Expose `defined` function correctly [#1384](https://github.com/stoplightio/spectral/issues/1384)

## [5.6.0] - 2020-09-28

### Added

- YAML merge keys can be used in rulesets [#1325](https://github.com/stoplightio/spectral/issues/1325)
- New built-in function `defined` [#1338](https://github.com/stoplightio/spectral/pull/1338)
- Enhance error message formatting [#1339](https://github.com/stoplightio/spectral/issues/1339)
- JS API: Document format lookup functions takes filepath [#1348](https://github.com/stoplightio/spectral/pull/1348)

## [5.5.0] - 2020-08-25

### Added

- JS API: Support proxies [#1081](https://github.com/stoplightio/spectral/issues/1081)
- Ruleset accepts `documentationUrl` property to specify the source of the documentation [#1242](https://github.com/stoplightio/spectral/pull/1242)
- Introduce an experimental JSON Path engine to speed up the linting process [#1136](https://github.com/stoplightio/spectral/pull/1136). Currently hidden behind USE_NIMMA env variable.

### Fixed

- Improve examples validation [#1284](https://github.com/stoplightio/spectral/pull/1284)
- Path Params being applied to more than http operations [#1187](https://github.com/stoplightio/spectral/issues/1187)
- Occasional out of memory errors caused by better-ajv-errors [#1223](https://github.com/stoplightio/spectral/issues/1223), [#455](https://github.com/stoplightio/spectral/issues/455)
- Unexpected result while linting an empty document [#1209](https://github.com/stoplightio/spectral/issues/1209)
- Casing function supports leading char [#1256](https://github.com/stoplightio/spectral/pull/1256)
- `operation-paramaters` rule outputs better messages [#1235](https://github.com/stoplightio/spectral/issues/1235)
- Document sources are not normalized correctly under Windows [#1185](https://github.com/stoplightio/spectral/pull/1185)
- Various performance improvements [#1184](https://github.com/stoplightio/spectral/pull/1184), [#1188](https://github.com/stoplightio/spectral/pull/1188), [#1189](https://github.com/stoplightio/spectral/pull/1189), [#1300](https://github.com/stoplightio/spectral/pull/1300)

## [5.4.0] - 2020-05-27

### Added

- New AsyncAPI 2 ruleset and format [#965](https://github.com/stoplightio/spectral/issues/965)
- Custom functions can be async [#694](https://github.com/stoplightio/spectral/issues/694)
- Expose fetch and cache to custom functions [#1078](https://github.com/stoplightio/spectral/pull/1078), [#1079](https://github.com/stoplightio/spectral/pull/1079)

### Changed

- Drop `example-value-or-externalValue` rule and introduce `oas3-examples-value-or-externalValue` [#883](https://github.com/stoplightio/spectral/issues/883), [#1098](https://github.com/stoplightio/spectral/pull/1098)
- Drop useless oas rule tags [#1095](https://github.com/stoplightio/spectral/pull/1095)
- AJV: swallow missing references [#1147](https://github.com/stoplightio/spectral/pull/1147)
- Improve ruleset validation [#1144](https://github.com/stoplightio/spectral/pull/1144)
- Allow running spectral from any directory in Docker [#1022](https://github.com/stoplightio/spectral/pull/1022)

### Fixed

- Improve `oas2-schema` and `oas3-schema` rules [#403](https://github.com/stoplightio/spectral/issues/403)
- `path-params` rule now properly detects undefined parameters across operations [#1076](https://github.com/stoplightio/spectral/issues/1076)
- Load custom functions from NPM correctly [#1093](https://github.com/stoplightio/spectral/pull/1093)
- Teach `path-params` to report an actual endpoint path [#1130](https://github.com/stoplightio/spectral/issues/1130)

## [5.3.0] - 2020-04-02

### Added

- Built-in functions can now be accessed from custom functions [#925](https://github.com/stoplightio/spectral/pull/925)
- CLI: `--show-unmatched-globs` flag [#747](https://github.com/stoplightio/spectral/issues/747)

### Changed

- `typed-enum` function is no longer a built-in function. It's been migrated into a custom function of the OpenAPI ruleset [#924](https://github.com/stoplightio/spectral/issues/924)
- `openapi-tags` rule has been fixed to make it fit its description [#1038](https://github.com/stoplightio/spectral/pull/1038)

### Fixed

- Ruleset exceptions used to slip certain errors through cracks [#1018](https://github.com/stoplightio/spectral/issues/1018)
- Correct misleading `info-license` message [#1031](https://github.com/stoplightio/spectral/pull/1031)
- Requiring packages located under node_modules is possible [#1029](https://github.com/stoplightio/spectral/pull/1029)
- Set proper document source if legacy parsed result is given [#1040](https://github.com/stoplightio/spectral/pull/1040)

## [5.2.0] - 2020-03-18

### Added

- Rule exceptions are supported [#747](https://github.com/stoplightio/spectral/issues/747)
- Allow require calls in Node.JS [#1011](https://github.com/stoplightio/spectral/pull/1011)

### Changed

- YAMLIncompatibleValue diagnostics are now considered warnings [#1009](https://github.com/stoplightio/spectral/pull/1009)

### Fixed

- Alphabetical rule works correctly for \$refs [#979](https://github.com/stoplightio/spectral/issues/979)

## [5.1.0] - 2020-02-26

### Added

- Implement a new `typed-enum` rule to detect enum value that do not respect specified type [#913](https://github.com/stoplightio/spectral/pull/913)
- API: introduced document [#876](https://github.com/stoplightio/spectral/pull/876) - note, this is **not** a breaking change
- Introduce optional enhancers to casing function [#884](https://github.com/stoplightio/spectral/pull/884)

### Fixed

- Improved Example Object validation [#882](https://github.com/stoplightio/spectral/pull/882)
- `oas3-operation-security-defined` rule supports optional authentication [#895](https://github.com/stoplightio/spectral/pull/895)
- Generate more correct paths when reporting an error [#900](https://github.com/stoplightio/spectral/pull/900)
- `example-value-or-externalValue` no longer reports false positives [#899](https://github.com/stoplightio/spectral/pull/899)
- `schema-path` accepts a JSON Path expression as a field selector [#917](https://github.com/stoplightio/spectral/pull/917)
- `schema-path` handles invalid values gracefully [#917](https://github.com/stoplightio/spectral/pull/917)
- `oas3-valid-(content-)schema-example` rules handle nullable correctly [#914](https://github.com/stoplightio/spectral/pull/914)

## [5.0.0] - 2019-12-24

### Added

- Alphabetical rule function now supports numeric keys [#730](https://github.com/stoplightio/spectral/issues/730)
- Non-JSON-ish YAML mapping keys are reported [#726](https://github.com/stoplightio/spectral/issues/726)
- CLI: new formatter - text [#822](https://github.com/stoplightio/spectral/issues/822)
- CLI: new formatter - teamcity [#823](https://github.com/stoplightio/spectral/issues/823)
- CLI: new formatter - HTML [#389](https://github.com/stoplightio/spectral/issues/389)
- CLI: custom resolver can be provided leveraging --resolver flag [#717](https://github.com/stoplightio/spectral/issues/717)
- CLI: input can be provided via STDIN [#757](https://github.com/stoplightio/spectral/issues/757)
- Implement ignoreUnsupportedFormats to make it easier to detect unrecognized formats [#678](https://github.com/stoplightio/spectral/issues/678)
- Rule's Given can be an array now [#799](https://github.com/stoplightio/spectral/pull/799)
- Casing built-in function is added [#564](https://github.com/stoplightio/spectral/issues/564)
- New oas rule - `operation-tag-defined` [#704](https://github.com/stoplightio/spectral/pull/704)

### Changed

- BREAKING: The oas2 and oas3 rulesets have been merged into a single oas ruleset [#773](https://github.com/stoplightio/spectral/pull/773)
- BREAKING: Deprecated Spectral#addRules and Spectral#addFunctions have been removed [#561](https://github.com/stoplightio/spectral/issues/561)
- BREAKING: Some oas rules, such as `example-value-or-externalValue` and `openapi-tags`, are now included in the recommended rulset [#725](https://github.com/stoplightio/spectral/issues/725) [#706](https://github.com/stoplightio/spectral/pull/706)
- BREAKING: The `model-description` and `operation-summary-formatted` rules have been removed [#725](https://github.com/stoplightio/spectral/issues/725)
- BREAKING: The `when` rule property has been removed [#585](https://github.com/stoplightio/spectral/issues/585)
- BREAKING: Rules are set to recommended by default [#719](https://github.com/stoplightio/spectral/pull/719)
- Improved error source detection [#685](https://github.com/stoplightio/spectral/pull/685)
- Error paths point at unresolved document [#839](https://github.com/stoplightio/spectral/pull/839)
- Validation messages contain more consistent error paths [#867](https://github.com/stoplightio/spectral/pull/867)
- CLI: Default `--fail-severity` is now `error`, so getting a `warn`, `info` or a `hint` will not return a exit status code [#706](https://github.com/stoplightio/spectral/pull/706)
- Rulesets no longer require a `rules` property [#652](https://github.com/stoplightio/spectral/pull/652)

### Fixed

- Circular remote references with JSON pointers are resolved correctly [json-ref-resolver#141](https://github.com/stoplightio/json-ref-resolver/pull/141)
- Local root JSON pointers are resolved correctly [json-ref-resolver#146](https://github.com/stoplightio/json-ref-resolver/pull/146)
- Invalid JSON pointers are reported as errors now [json-ref-resolver#140](https://github.com/stoplightio/json-ref-resolver/pull/140) and [json-ref-resolver#147](https://github.com/stoplightio/json-ref-resolver/pull/147)
- Unixify glob patterns under Windows [#679](https://github.com/stoplightio/spectral/issues/679)
- Improved duplicate keys detection [#751](https://github.com/stoplightio/spectral/issues/751)
- Spectral should be usable in browsers with no crypto module available [#846](https://github.com/stoplightio/spectral/pull/846)
- Falsy values are printed in validation messages [#824](https://github.com/stoplightio/spectral/pull/824)
- Validation results are no longer duplicate [#680](https://github.com/stoplightio/spectral/issues/680), [#737](https://github.com/stoplightio/spectral/pull/737) and [#856](https://github.com/stoplightio/spectral/pull/856)

## [4.2.0] - 2019-10-08

### Added

- CLI: glob patterns and multiple paths are allowed [#534](https://github.com/stoplightio/spectral/issues/534)
- CLI: control fail severity and result display [#368](https://github.com/stoplightio/spectral/issues/368)
- CLI: new formatter - JUnit [#478](https://github.com/stoplightio/spectral/issues/478)
- CLI: add possibility to proxy requests [#446](https://github.com/stoplightio/spectral/issues/446)
- Built-in ruleset formats targeting JSON Schema files [#571](https://github.com/stoplightio/spectral/issues/571)
- `{{value}}` and `{{path}}` can be used in messages [#520](https://github.com/stoplightio/spectral/issues/520) [#572](https://github.com/stoplightio/spectral/issues/572)

### Deprecated

- `when` Rule property is deprecated [#585](https://github.com/stoplightio/spectral/issues/585)

### Changed

- Validation results produced by `alphabetical` function are more meaningful [#613](https://github.com/stoplightio/spectral/pull/613)
- Enhanced JSON Schema enum validation [#579](https://github.com/stoplightio/spectral/pull/579)
- Improved messages generated by `oasPathParam` function [#537](https://github.com/stoplightio/spectral/issues/537)
- CLI: the amount of enabled rules is now displayed if you run Spectral with `--verbose` flag [#435](https://github.com/stoplightio/spectral/issues/435)
- Stricter source matching for errors [#615](https://github.com/stoplightio/spectral/pull/615)

### Fixed

- `schema` function can validate falsy values [10e5d1c](https://github.com/stoplightio/spectral/commit/10e5d1c0262790ad8349e25b2e5517e7ae15402c)
- `schema` function can validate Draft 6 and Draft 7 JSON Schemas [ea2ddff](https://github.com/stoplightio/spectral/commit/ea2ddffd58a2a92f483147fec195e0a8fe80c07b)
- Parameters in links objects are not linted for not having a description property. [#272](https://github.com/stoplightio/spectral/issues/272)
- More accurate ranges for errors occurring in referenced files [6986b82](https://github.com/stoplightio/spectral/commit/6986b82bee725aa8733c2d07ccc65a99e14c22c6)
- CLI: stylish formatter reports `info` and `hint` severity levels correctly [#565](https://github.com/stoplightio/spectral/issues/565)

## [4.1.1] - 2019-09-05

### Fixed

- CLI: missing tslib [#524](https://github.com/stoplightio/spectral/issues/524)

## [4.1.0] - 2019-09-04

### Added

- Rulesets can be loaded using `Spectral#loadRuleset` method
- Custom functions can be registered directly in rulesets
- Rulesets can be registered against document format
- New rules: no-\$ref-siblings, oas2-anyOf, oas2-oneOf
- YAML's [merge keys](https://yaml.org/type/merge.html) are supported
- \$refs can be used in rulesets
- Resolved document is accessible now if you use `Spectral#runWithResolved` method [#398](https://github.com/stoplightio/spectral/issues/398)

### Changed

- valid-example rule has been broken into smaller, more specific rules [#223](https://github.com/stoplightio/spectral/issues/223)
- YAML scalar values are parsed according to YAML 1.2 spec [#481](https://github.com/stoplightio/spectral/issues/481)
- We swapped oclif with yargs

### Deprecated

- `addRules` and `addFunctions` have been deprecated, use `setRules` and `setFunctions` instead
- Importing built-in ruleset in cjs/esm module way (via require or import) is no longer recommended. Consider using `#loadRuleset` instead

### Fixed

- CLI: relative paths to documents are supported [#474](https://github.com/stoplightio/spectral/issues/474)
- Improved path and ranges generation [#458](https://github.com/stoplightio/spectral/pull/458), [#459](https://github.com/stoplightio/spectral/pull/459)
- Unknown schema formats are no longer printed [#396](https://github.com/stoplightio/spectral/issues/396)
- Graceful handling of circular rulesets
- A few other minor issues

## [4.0.3] - 2019-08-26

### Fixed

- Resolve references to files with relative paths

## [4.0.2] - 2019-07-31

### Fixed

- Tweaked JSON Path lookup for paths to avoid deep scan, speeding up linting for large documents [#413](https://github.com/stoplightio/spectral/pull/413)

## [4.0.1] - 2019-07-16

### Fixed

- NPM install for Windows users was failing due to a dependency not supporting Windows in their build script

## [4.0.0] - 2019-07-09

### Added

- Using the CLI with multiple, custom rulesets
- New syntax for rulesets, including overriding rules and extending rulesets
- More friendly errors and warnings
- CLI `--quiet` flag added to lint command, removing any output other than results
- CLI `--skip-rules` flag added to lint command, to ignore certain rules

### Changed

- CLI now reports errors and warnings for referenced (`$ref`) files

### Removed

- Configuration files were briefly available in 3.x but removed in v4.0
- CLI `--max-results` flag is removed

<!-- markdown-link-check-enable-->
