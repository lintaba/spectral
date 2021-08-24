export { ruleset as default };
declare const ruleset: {
    documentationUrl: string;
    formats: import("../../../core/src").Format<void>[];
    rules: {
        'operation-success-response': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").IFunction;
            };
        };
        'oas2-operation-formData-consume-check': {
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").IFunction;
            };
        };
        'operation-operationId-unique': {
            description: string;
            recommended: boolean;
            type: string;
            severity: number;
            given: string;
            then: {
                function: import("../../../core/src").IFunction;
            };
        };
        'operation-parameters': {
            description: string;
            message: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").IFunction;
            };
        };
        'operation-tag-defined': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").IFunction;
            };
        };
        'path-params': {
            description: string;
            message: string;
            type: string;
            severity: number;
            recommended: boolean;
            given: string;
            then: {
                function: import("../../../core/src").IFunction;
            };
        };
        'contact-properties': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            }[];
        };
        'duplicated-entry-in-enum': {
            description: string;
            type: string;
            severity: string;
            recommended: boolean;
            message: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, import("./functions/oasSchema").Options>;
                functionOptions: {
                    schema: {
                        oneOf: ({
                            type: string;
                            uniqueItems: boolean;
                            not?: undefined;
                        } | {
                            not: {
                                type: string;
                            };
                            type?: undefined;
                            uniqueItems?: undefined;
                        })[];
                    };
                };
            };
        };
        'info-contact': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'info-description': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'info-license': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'license-url': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'no-eval-in-markdown': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                functionOptions: {
                    notMatch: string;
                };
            };
        };
        'no-script-tags-in-markdown': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                functionOptions: {
                    notMatch: string;
                };
            };
        };
        'openapi-tags-alphabetical': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown[] | Record<string, unknown>, import("@stoplight/spectral-functions").AlphabeticalOptions>;
                functionOptions: {
                    keyedBy: string;
                };
            };
        };
        'openapi-tags': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                functionOptions: {
                    dialect: string;
                    schema: {
                        type: string;
                        minItems: number;
                    };
                };
            };
        };
        'operation-description': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'operation-operationId': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'operation-operationId-valid-in-url': {
            message: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                functionOptions: {
                    match: string;
                };
            };
        };
        'operation-singular-tag': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<string | number | unknown[] | Record<string, unknown>, import("@stoplight/spectral-functions").LengthOptions>;
                functionOptions: {
                    max: number;
                };
            };
        };
        'operation-tags': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'path-declarations-must-exist': {
            message: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                functionOptions: {
                    notMatch: string;
                };
            };
        };
        'path-keys-no-trailing-slash': {
            message: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                functionOptions: {
                    notMatch: string;
                };
            };
        };
        'path-not-include-query': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                functionOptions: {
                    notMatch: string;
                };
            };
        };
        'tag-description': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'no-$ref-siblings': {
            formats: import("../../../core/src").Format<void>[];
            description: string;
            message: string;
            type: string;
            severity: number;
            recommended: boolean;
            resolved: boolean;
            given: string;
            then: {
                function: import("../../../core/src").IFunction;
            };
        };
        'typed-enum': {
            description: string;
            message: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").IFunction;
            };
        };
        'oas2-api-host': {
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'oas2-api-schemes': {
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                functionOptions: {
                    dialect: string;
                    schema: {
                        items: {
                            type: string;
                        };
                        minItems: number;
                        type: string;
                    };
                };
            };
        };
        'oas2-host-not-example': {
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            given: string;
            type: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                functionOptions: {
                    notMatch: string;
                };
            };
        };
        'oas2-host-trailing-slash': {
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            given: string;
            type: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                functionOptions: {
                    notMatch: string;
                };
            };
        };
        'oas2-parameter-description': {
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            given: string;
            type: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'oas2-operation-security-defined': {
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<{
                    paths: Record<string, unknown>;
                }, {
                    schemesPath: import("@stoplight/types").JsonPath;
                }>;
                functionOptions: {
                    schemesPath: string[];
                };
            };
        };
        'oas2-valid-schema-example': {
            description: string;
            message: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            severity: number;
            type: string;
            given: string[];
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<Record<string, unknown>, import("./functions/oasExample").Options>;
                functionOptions: {
                    schemaField: string;
                    oasVersion: number;
                    type: string;
                };
            };
        };
        'oas2-valid-media-example': {
            description: string;
            message: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            severity: number;
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<Record<string, unknown>, import("./functions/oasExample").Options>;
                functionOptions: {
                    schemaField: string;
                    oasVersion: number;
                    type: string;
                };
            };
        };
        'oas2-anyOf': {
            message: string;
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, unknown>;
            };
        };
        'oas2-oneOf': {
            message: string;
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, unknown>;
            };
        };
        'oas2-schema': {
            description: string;
            message: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            severity: number;
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'oas2-unused-definition': {
            description: string;
            recommended: boolean;
            resolved: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<Record<string, unknown>, import("@stoplight/spectral-functions").UnreferencedReusableObjectOptions>;
                functionOptions: {
                    reusableObjectsLocation: string;
                };
            };
        };
        'oas3-api-servers': {
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                functionOptions: {
                    dialect: string;
                    schema: {
                        items: {
                            type: string;
                        };
                        minItems: number;
                        type: string;
                    };
                };
            };
        };
        'oas3-examples-value-or-externalValue': {
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string[];
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<Record<string, unknown>, import("@stoplight/spectral-functions").XorOptions>;
                functionOptions: {
                    properties: string[];
                };
            };
        };
        'oas3-operation-security-defined': {
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<{
                    paths: Record<string, unknown>;
                }, {
                    schemesPath: import("@stoplight/types").JsonPath;
                }>;
                functionOptions: {
                    schemesPath: string[];
                };
            };
        };
        'oas3-parameter-description': {
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'oas3-server-not-example.com': {
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                functionOptions: {
                    notMatch: string;
                };
            };
        };
        'oas3-server-trailing-slash': {
            description: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<string, import("@stoplight/spectral-functions").PatternOptions>;
                functionOptions: {
                    notMatch: string;
                };
            };
        };
        'oas3-valid-media-example': {
            description: string;
            message: string;
            recommended: boolean;
            severity: number;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            given: string[];
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<Record<string, unknown>, import("./functions/oasExample").Options>;
                functionOptions: {
                    schemaField: string;
                    oasVersion: number;
                    type: string;
                };
            };
        };
        'oas3-valid-schema-example': {
            description: string;
            message: string;
            severity: number;
            formats: import("../../../core/src").Format<void>[];
            recommended: boolean;
            type: string;
            given: string[];
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<Record<string, unknown>, import("./functions/oasExample").Options>;
                functionOptions: {
                    schemaField: string;
                    oasVersion: number;
                    type: string;
                };
            };
        };
        'oas3-schema': {
            description: string;
            message: string;
            severity: number;
            formats: import("../../../core/src").Format<void>[];
            recommended: boolean;
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'oas3-unused-component': {
            message: string;
            recommended: boolean;
            formats: import("../../../core/src").Format<void>[];
            type: string;
            resolved: boolean;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<{
                    components: Record<string, unknown>;
                }, null>;
            };
        };
    };
};
