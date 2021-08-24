declare const _default: {
    documentationUrl: string;
    formats: import("../../../core/src").Format<void>[];
    rules: {
        'asyncapi-channel-no-empty-parameter': {
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
        'asyncapi-channel-no-query-nor-fragment': {
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
        'asyncapi-channel-no-trailing-slash': {
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
        'asyncapi-headers-schema-type-object': {
            description: string;
            message: string;
            severity: string;
            recommended: boolean;
            type: string;
            given: string[];
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                functionOptions: {
                    allErrors: boolean;
                    schema: {
                        type: string;
                        properties: {
                            type: {
                                enum: string[];
                            };
                        };
                        required: string[];
                    };
                };
            };
        };
        'asyncapi-info-contact-properties': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            }[];
        };
        'asyncapi-info-contact': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'asyncapi-info-description': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'asyncapi-info-license-url': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'asyncapi-info-license': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'asyncapi-operation-description': {
            description: string;
            recommended: boolean;
            type: string;
            given: string[];
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'asyncapi-operation-operationId': {
            description: string;
            severity: string;
            recommended: boolean;
            type: string;
            given: string[];
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'asyncapi-parameter-description': {
            description: string;
            recommended: boolean;
            type: string;
            given: string[];
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'asyncapi-payload-default': {
            description: string;
            message: string;
            severity: string;
            recommended: boolean;
            type: string;
            given: string[];
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<{
                    default?: unknown;
                    examples?: unknown[] | undefined;
                }, import("./functions/asyncApi2SchemaValidation").Options>;
                functionOptions: {
                    type: string;
                };
            };
        };
        'asyncapi-payload-examples': {
            description: string;
            message: string;
            severity: string;
            recommended: boolean;
            type: string;
            given: string[];
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<{
                    default?: unknown;
                    examples?: unknown[] | undefined;
                }, import("./functions/asyncApi2SchemaValidation").Options>;
                functionOptions: {
                    type: string;
                };
            };
        };
        'asyncapi-payload-unsupported-schemaFormat': {
            description: string;
            severity: string;
            recommended: boolean;
            type: string;
            given: string[];
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, unknown>;
            };
        };
        'asyncapi-payload': {
            description: string;
            message: string;
            severity: string;
            recommended: boolean;
            type: string;
            given: string[];
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'asyncapi-schema-default': {
            description: string;
            message: string;
            severity: string;
            recommended: boolean;
            type: string;
            given: string[];
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<{
                    default?: unknown;
                    examples?: unknown[] | undefined;
                }, import("./functions/asyncApi2SchemaValidation").Options>;
                functionOptions: {
                    type: string;
                };
            };
        };
        'asyncapi-schema-examples': {
            description: string;
            message: string;
            severity: string;
            recommended: boolean;
            type: string;
            given: string[];
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<{
                    default?: unknown;
                    examples?: unknown[] | undefined;
                }, import("./functions/asyncApi2SchemaValidation").Options>;
                functionOptions: {
                    type: string;
                };
            };
        };
        'asyncapi-schema': {
            description: string;
            message: string;
            severity: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                functionOptions: {
                    allErrors: boolean;
                    schema: {
                        title: string;
                        $schema: string;
                        $id: string;
                        type: string;
                        required: string[];
                        additionalProperties: boolean;
                        patternProperties: {
                            "^x-[\\w\\d.\\-_]+$": {
                                $ref: string;
                            };
                        };
                        properties: {
                            asyncapi: {
                                type: string;
                                enum: string[];
                                description: string;
                            };
                            id: {
                                type: string;
                                description: string;
                                format: string;
                            };
                            info: {
                                $ref: string;
                            };
                            servers: {
                                type: string;
                                additionalProperties: {
                                    $ref: string;
                                };
                            };
                            defaultContentType: {
                                type: string;
                            };
                            channels: {
                                $ref: string;
                            };
                            components: {
                                $ref: string;
                            };
                            tags: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                                uniqueItems: boolean;
                            };
                            externalDocs: {
                                $ref: string;
                            };
                        };
                        definitions: {
                            Reference: {
                                type: string;
                                required: string[];
                                properties: {
                                    $ref: {
                                        $ref: string;
                                    };
                                };
                            };
                            ReferenceObject: {
                                type: string;
                                format: string;
                            };
                            info: {
                                type: string;
                                description: string;
                                required: string[];
                                additionalProperties: boolean;
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                properties: {
                                    title: {
                                        type: string;
                                        description: string;
                                    };
                                    version: {
                                        type: string;
                                        description: string;
                                    };
                                    description: {
                                        type: string;
                                        description: string;
                                    };
                                    termsOfService: {
                                        type: string;
                                        description: string;
                                        format: string;
                                    };
                                    contact: {
                                        $ref: string;
                                    };
                                    license: {
                                        $ref: string;
                                    };
                                };
                            };
                            contact: {
                                type: string;
                                description: string;
                                additionalProperties: boolean;
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    url: {
                                        type: string;
                                        description: string;
                                        format: string;
                                    };
                                    email: {
                                        type: string;
                                        description: string;
                                        format: string;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                            };
                            license: {
                                type: string;
                                required: string[];
                                additionalProperties: boolean;
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    url: {
                                        type: string;
                                        description: string;
                                        format: string;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                            };
                            server: {
                                type: string;
                                description: string;
                                required: string[];
                                additionalProperties: boolean;
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                properties: {
                                    url: {
                                        type: string;
                                    };
                                    description: {
                                        type: string;
                                    };
                                    protocol: {
                                        type: string;
                                        description: string;
                                    };
                                    protocolVersion: {
                                        type: string;
                                    };
                                    variables: {
                                        $ref: string;
                                    };
                                    security: {
                                        type: string;
                                        items: {
                                            $ref: string;
                                        };
                                    };
                                    bindings: {
                                        $ref: string;
                                    };
                                };
                            };
                            serverVariables: {
                                type: string;
                                additionalProperties: {
                                    $ref: string;
                                };
                            };
                            serverVariable: {
                                type: string;
                                description: string;
                                minProperties: number;
                                additionalProperties: boolean;
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                properties: {
                                    enum: {
                                        type: string;
                                        items: {
                                            type: string;
                                        };
                                        uniqueItems: boolean;
                                    };
                                    default: {
                                        type: string;
                                    };
                                    description: {
                                        type: string;
                                    };
                                    examples: {
                                        type: string;
                                        items: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                            channels: {
                                type: string;
                                propertyNames: {
                                    type: string;
                                    format: string;
                                    minLength: number;
                                };
                                additionalProperties: {
                                    $ref: string;
                                };
                            };
                            components: {
                                type: string;
                                description: string;
                                additionalProperties: boolean;
                                properties: {
                                    schemas: {
                                        $ref: string;
                                    };
                                    messages: {
                                        $ref: string;
                                    };
                                    securitySchemes: {
                                        type: string;
                                        patternProperties: {
                                            "^[\\w\\d.\\-_]+$": {
                                                oneOf: {
                                                    $ref: string;
                                                }[];
                                            };
                                        };
                                    };
                                    parameters: {
                                        $ref: string;
                                    };
                                    correlationIds: {
                                        type: string;
                                        patternProperties: {
                                            "^[\\w\\d.\\-_]+$": {
                                                oneOf: {
                                                    $ref: string;
                                                }[];
                                            };
                                        };
                                    };
                                    operationTraits: {
                                        type: string;
                                        additionalProperties: {
                                            $ref: string;
                                        };
                                    };
                                    messageTraits: {
                                        type: string;
                                        additionalProperties: {
                                            $ref: string;
                                        };
                                    };
                                    serverBindings: {
                                        type: string;
                                        additionalProperties: {
                                            $ref: string;
                                        };
                                    };
                                    channelBindings: {
                                        type: string;
                                        additionalProperties: {
                                            $ref: string;
                                        };
                                    };
                                    operationBindings: {
                                        type: string;
                                        additionalProperties: {
                                            $ref: string;
                                        };
                                    };
                                    messageBindings: {
                                        type: string;
                                        additionalProperties: {
                                            $ref: string;
                                        };
                                    };
                                };
                            };
                            schemas: {
                                type: string;
                                additionalProperties: {
                                    $ref: string;
                                };
                                description: string;
                            };
                            messages: {
                                type: string;
                                additionalProperties: {
                                    $ref: string;
                                };
                                description: string;
                            };
                            parameters: {
                                type: string;
                                additionalProperties: {
                                    $ref: string;
                                };
                                description: string;
                            };
                            schema: {
                                allOf: ({
                                    definitions: {
                                        schemaArray: {
                                            type: string;
                                            minItems: number;
                                            items: {
                                                $ref: string;
                                            };
                                        };
                                        nonNegativeInteger: {
                                            type: string;
                                            minimum: number;
                                        };
                                        nonNegativeIntegerDefault0: {
                                            allOf: ({
                                                $ref: string;
                                                default?: undefined;
                                            } | {
                                                default: number;
                                                $ref?: undefined;
                                            })[];
                                        };
                                        simpleTypes: {
                                            enum: string[];
                                        };
                                        stringArray: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                            uniqueItems: boolean;
                                            default: never[];
                                        };
                                    };
                                    type: string[];
                                    properties: {
                                        $id: {
                                            type: string;
                                            format: string;
                                        };
                                        $schema: {
                                            type: string;
                                            format: string;
                                        };
                                        $ref: {
                                            type: string;
                                            format: string;
                                        };
                                        $comment: {
                                            type: string;
                                        };
                                        title: {
                                            type: string;
                                        };
                                        description: {
                                            type: string;
                                        };
                                        default: boolean;
                                        readOnly: {
                                            type: string;
                                            default: boolean;
                                        };
                                        writeOnly: {
                                            type: string;
                                            default: boolean;
                                        };
                                        examples: {
                                            type: string;
                                            items: boolean;
                                        };
                                        multipleOf: {
                                            type: string;
                                            exclusiveMinimum: number;
                                        };
                                        maximum: {
                                            type: string;
                                        };
                                        exclusiveMaximum: {
                                            type: string;
                                        };
                                        minimum: {
                                            type: string;
                                        };
                                        exclusiveMinimum: {
                                            type: string;
                                        };
                                        maxLength: {
                                            $ref: string;
                                        };
                                        minLength: {
                                            $ref: string;
                                        };
                                        pattern: {
                                            type: string;
                                            format: string;
                                        };
                                        additionalItems: {
                                            $ref: string;
                                        };
                                        items: {
                                            anyOf: {
                                                $ref: string;
                                            }[];
                                            default: boolean;
                                        };
                                        maxItems: {
                                            $ref: string;
                                        };
                                        minItems: {
                                            $ref: string;
                                        };
                                        uniqueItems: {
                                            type: string;
                                            default: boolean;
                                        };
                                        contains: {
                                            $ref: string;
                                        };
                                        maxProperties: {
                                            $ref: string;
                                        };
                                        minProperties: {
                                            $ref: string;
                                        };
                                        required: {
                                            $ref: string;
                                        };
                                        additionalProperties: {
                                            $ref: string;
                                            anyOf?: undefined;
                                            default?: undefined;
                                        };
                                        definitions: {
                                            type: string;
                                            additionalProperties: {
                                                $ref: string;
                                            };
                                            default: {};
                                        };
                                        properties: {
                                            type: string;
                                            additionalProperties: {
                                                $ref: string;
                                            };
                                            default: {};
                                        };
                                        patternProperties: {
                                            type: string;
                                            additionalProperties: {
                                                $ref: string;
                                            };
                                            propertyNames: {
                                                format: string;
                                            };
                                            default: {};
                                        };
                                        dependencies: {
                                            type: string;
                                            additionalProperties: {
                                                anyOf: {
                                                    $ref: string;
                                                }[];
                                            };
                                        };
                                        propertyNames: {
                                            $ref: string;
                                        };
                                        const: boolean;
                                        enum: {
                                            type: string;
                                            items: boolean;
                                            minItems: number;
                                            uniqueItems: boolean;
                                        };
                                        type: {
                                            anyOf: ({
                                                $ref: string;
                                                type?: undefined;
                                                items?: undefined;
                                                minItems?: undefined;
                                                uniqueItems?: undefined;
                                            } | {
                                                type: string;
                                                items: {
                                                    $ref: string;
                                                };
                                                minItems: number;
                                                uniqueItems: boolean;
                                                $ref?: undefined;
                                            })[];
                                        };
                                        format: {
                                            type: string;
                                        };
                                        contentMediaType: {
                                            type: string;
                                        };
                                        contentEncoding: {
                                            type: string;
                                        };
                                        if: {
                                            $ref: string;
                                        };
                                        then: {
                                            $ref: string;
                                        };
                                        else: {
                                            $ref: string;
                                        };
                                        allOf: {
                                            $ref: string;
                                            type?: undefined;
                                            minItems?: undefined;
                                            items?: undefined;
                                        };
                                        anyOf: {
                                            $ref: string;
                                            type?: undefined;
                                            minItems?: undefined;
                                            items?: undefined;
                                        };
                                        oneOf: {
                                            $ref: string;
                                            type?: undefined;
                                            minItems?: undefined;
                                            items?: undefined;
                                        };
                                        not: {
                                            $ref: string;
                                        };
                                        discriminator?: undefined;
                                        externalDocs?: undefined;
                                        deprecated?: undefined;
                                    };
                                    default: boolean;
                                    patternProperties?: undefined;
                                } | {
                                    type: string;
                                    patternProperties: {
                                        c: {
                                            $ref: string;
                                        };
                                    };
                                    properties: {
                                        additionalProperties: {
                                            anyOf: ({
                                                $ref: string;
                                                type?: undefined;
                                            } | {
                                                type: string;
                                                $ref?: undefined;
                                            })[];
                                            default: {};
                                            $ref?: undefined;
                                        };
                                        items: {
                                            anyOf: ({
                                                $ref: string;
                                                type?: undefined;
                                                minItems?: undefined;
                                                items?: undefined;
                                            } | {
                                                type: string;
                                                minItems: number;
                                                items: {
                                                    $ref: string;
                                                };
                                                $ref?: undefined;
                                            })[];
                                            default: {};
                                        };
                                        allOf: {
                                            type: string;
                                            minItems: number;
                                            items: {
                                                $ref: string;
                                            };
                                            $ref?: undefined;
                                        };
                                        oneOf: {
                                            type: string;
                                            minItems: number;
                                            items: {
                                                $ref: string;
                                            };
                                            $ref?: undefined;
                                        };
                                        anyOf: {
                                            type: string;
                                            minItems: number;
                                            items: {
                                                $ref: string;
                                            };
                                            $ref?: undefined;
                                        };
                                        not: {
                                            $ref: string;
                                        };
                                        properties: {
                                            type: string;
                                            additionalProperties: {
                                                $ref: string;
                                            };
                                            default: {};
                                        };
                                        patternProperties: {
                                            type: string;
                                            additionalProperties: {
                                                $ref: string;
                                            };
                                            default: {};
                                            propertyNames?: undefined;
                                        };
                                        propertyNames: {
                                            $ref: string;
                                        };
                                        contains: {
                                            $ref: string;
                                        };
                                        discriminator: {
                                            type: string;
                                        };
                                        externalDocs: {
                                            $ref: string;
                                        };
                                        deprecated: {
                                            type: string;
                                            default: boolean;
                                        };
                                        $id?: undefined;
                                        $schema?: undefined;
                                        $ref?: undefined;
                                        $comment?: undefined;
                                        title?: undefined;
                                        description?: undefined;
                                        default?: undefined;
                                        readOnly?: undefined;
                                        writeOnly?: undefined;
                                        examples?: undefined;
                                        multipleOf?: undefined;
                                        maximum?: undefined;
                                        exclusiveMaximum?: undefined;
                                        minimum?: undefined;
                                        exclusiveMinimum?: undefined;
                                        maxLength?: undefined;
                                        minLength?: undefined;
                                        pattern?: undefined;
                                        additionalItems?: undefined;
                                        maxItems?: undefined;
                                        minItems?: undefined;
                                        uniqueItems?: undefined;
                                        maxProperties?: undefined;
                                        minProperties?: undefined;
                                        required?: undefined;
                                        definitions?: undefined;
                                        dependencies?: undefined;
                                        const?: undefined;
                                        enum?: undefined;
                                        type?: undefined;
                                        format?: undefined;
                                        contentMediaType?: undefined;
                                        contentEncoding?: undefined;
                                        if?: undefined;
                                        then?: undefined;
                                        else?: undefined;
                                    };
                                    definitions?: undefined;
                                    default?: undefined;
                                })[];
                            };
                            externalDocs: {
                                type: string;
                                additionalProperties: boolean;
                                description: string;
                                required: string[];
                                properties: {
                                    description: {
                                        type: string;
                                    };
                                    url: {
                                        type: string;
                                        format: string;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                            };
                            channelItem: {
                                type: string;
                                additionalProperties: boolean;
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                minProperties: number;
                                properties: {
                                    $ref: {
                                        $ref: string;
                                    };
                                    parameters: {
                                        type: string;
                                        additionalProperties: {
                                            $ref: string;
                                        };
                                    };
                                    description: {
                                        type: string;
                                        description: string;
                                    };
                                    publish: {
                                        $ref: string;
                                    };
                                    subscribe: {
                                        $ref: string;
                                    };
                                    deprecated: {
                                        type: string;
                                        default: boolean;
                                    };
                                    bindings: {
                                        $ref: string;
                                    };
                                };
                            };
                            parameter: {
                                additionalProperties: boolean;
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                properties: {
                                    description: {
                                        type: string;
                                        description: string;
                                    };
                                    schema: {
                                        $ref: string;
                                    };
                                    location: {
                                        type: string;
                                        description: string;
                                        pattern: string;
                                    };
                                    $ref: {
                                        $ref: string;
                                    };
                                };
                            };
                            operation: {
                                type: string;
                                additionalProperties: boolean;
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                properties: {
                                    traits: {
                                        type: string;
                                        items: {
                                            oneOf: ({
                                                $ref: string;
                                                type?: undefined;
                                                items?: undefined;
                                            } | {
                                                type: string;
                                                items: ({
                                                    oneOf: {
                                                        $ref: string;
                                                    }[];
                                                    type?: undefined;
                                                    additionalItems?: undefined;
                                                } | {
                                                    type: string;
                                                    additionalItems: boolean;
                                                    oneOf?: undefined;
                                                })[];
                                                $ref?: undefined;
                                            })[];
                                        };
                                    };
                                    summary: {
                                        type: string;
                                    };
                                    description: {
                                        type: string;
                                    };
                                    tags: {
                                        type: string;
                                        items: {
                                            $ref: string;
                                        };
                                        uniqueItems: boolean;
                                    };
                                    externalDocs: {
                                        $ref: string;
                                    };
                                    operationId: {
                                        type: string;
                                    };
                                    bindings: {
                                        $ref: string;
                                    };
                                    message: {
                                        $ref: string;
                                    };
                                };
                            };
                            message: {
                                oneOf: ({
                                    $ref: string;
                                    oneOf?: undefined;
                                } | {
                                    oneOf: ({
                                        type: string;
                                        required: string[];
                                        additionalProperties: boolean;
                                        properties: {
                                            oneOf: {
                                                type: string;
                                                items: {
                                                    $ref: string;
                                                };
                                            };
                                            schemaFormat?: undefined;
                                            contentType?: undefined;
                                            headers?: undefined;
                                            payload?: undefined;
                                            correlationId?: undefined;
                                            tags?: undefined;
                                            summary?: undefined;
                                            name?: undefined;
                                            title?: undefined;
                                            description?: undefined;
                                            externalDocs?: undefined;
                                            deprecated?: undefined;
                                            examples?: undefined;
                                            bindings?: undefined;
                                            traits?: undefined;
                                        };
                                        patternProperties?: undefined;
                                    } | {
                                        type: string;
                                        additionalProperties: boolean;
                                        patternProperties: {
                                            "^x-[\\w\\d.\\-_]+$": {
                                                $ref: string;
                                            };
                                        };
                                        properties: {
                                            schemaFormat: {
                                                type: string;
                                            };
                                            contentType: {
                                                type: string;
                                            };
                                            headers: {
                                                $ref: string;
                                            };
                                            payload: {};
                                            correlationId: {
                                                oneOf: {
                                                    $ref: string;
                                                }[];
                                            };
                                            tags: {
                                                type: string;
                                                items: {
                                                    $ref: string;
                                                };
                                                uniqueItems: boolean;
                                            };
                                            summary: {
                                                type: string;
                                                description: string;
                                            };
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            title: {
                                                type: string;
                                                description: string;
                                            };
                                            description: {
                                                type: string;
                                                description: string;
                                            };
                                            externalDocs: {
                                                $ref: string;
                                            };
                                            deprecated: {
                                                type: string;
                                                default: boolean;
                                            };
                                            examples: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                };
                                            };
                                            bindings: {
                                                $ref: string;
                                            };
                                            traits: {
                                                type: string;
                                                items: {
                                                    oneOf: ({
                                                        $ref: string;
                                                        type?: undefined;
                                                        items?: undefined;
                                                    } | {
                                                        type: string;
                                                        items: ({
                                                            oneOf: {
                                                                $ref: string;
                                                            }[];
                                                            type?: undefined;
                                                            additionalItems?: undefined;
                                                        } | {
                                                            type: string;
                                                            additionalItems: boolean;
                                                            oneOf?: undefined;
                                                        })[];
                                                        $ref?: undefined;
                                                    })[];
                                                };
                                            };
                                            oneOf?: undefined;
                                        };
                                        required?: undefined;
                                    })[];
                                    $ref?: undefined;
                                })[];
                            };
                            bindingsObject: {
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    http: {};
                                    ws: {};
                                    amqp: {};
                                    amqp1: {};
                                    mqtt: {};
                                    mqtt5: {};
                                    kafka: {};
                                    nats: {};
                                    jms: {};
                                    sns: {};
                                    sqs: {};
                                    stomp: {};
                                    redis: {};
                                };
                            };
                            correlationId: {
                                type: string;
                                required: string[];
                                additionalProperties: boolean;
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                properties: {
                                    description: {
                                        type: string;
                                        description: string;
                                    };
                                    location: {
                                        type: string;
                                        description: string;
                                        pattern: string;
                                    };
                                };
                            };
                            specificationExtension: {
                                description: string;
                                additionalProperties: boolean;
                                additionalItems: boolean;
                            };
                            tag: {
                                type: string;
                                additionalProperties: boolean;
                                required: string[];
                                properties: {
                                    name: {
                                        type: string;
                                    };
                                    description: {
                                        type: string;
                                    };
                                    externalDocs: {
                                        $ref: string;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                            };
                            operationTrait: {
                                type: string;
                                additionalProperties: boolean;
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                properties: {
                                    summary: {
                                        type: string;
                                    };
                                    description: {
                                        type: string;
                                    };
                                    tags: {
                                        type: string;
                                        items: {
                                            $ref: string;
                                        };
                                        uniqueItems: boolean;
                                    };
                                    externalDocs: {
                                        $ref: string;
                                    };
                                    operationId: {
                                        type: string;
                                    };
                                    bindings: {
                                        $ref: string;
                                    };
                                };
                            };
                            messageTrait: {
                                type: string;
                                additionalProperties: boolean;
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                properties: {
                                    schemaFormat: {
                                        type: string;
                                    };
                                    contentType: {
                                        type: string;
                                    };
                                    headers: {
                                        oneOf: {
                                            $ref: string;
                                        }[];
                                    };
                                    correlationId: {
                                        oneOf: {
                                            $ref: string;
                                        }[];
                                    };
                                    tags: {
                                        type: string;
                                        items: {
                                            $ref: string;
                                        };
                                        uniqueItems: boolean;
                                    };
                                    summary: {
                                        type: string;
                                        description: string;
                                    };
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    title: {
                                        type: string;
                                        description: string;
                                    };
                                    description: {
                                        type: string;
                                        description: string;
                                    };
                                    externalDocs: {
                                        $ref: string;
                                    };
                                    deprecated: {
                                        type: string;
                                        default: boolean;
                                    };
                                    examples: {
                                        type: string;
                                        items: {
                                            type: string;
                                        };
                                    };
                                    bindings: {
                                        $ref: string;
                                    };
                                };
                            };
                            SecurityScheme: {
                                oneOf: {
                                    $ref: string;
                                }[];
                            };
                            userPassword: {
                                type: string;
                                required: string[];
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    description: {
                                        type: string;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                            apiKey: {
                                type: string;
                                required: string[];
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    in: {
                                        type: string;
                                        enum: string[];
                                    };
                                    description: {
                                        type: string;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                            X509: {
                                type: string;
                                required: string[];
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    description: {
                                        type: string;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                            symmetricEncryption: {
                                type: string;
                                required: string[];
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    description: {
                                        type: string;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                            asymmetricEncryption: {
                                type: string;
                                required: string[];
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    description: {
                                        type: string;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                            HTTPSecurityScheme: {
                                oneOf: {
                                    $ref: string;
                                }[];
                            };
                            NonBearerHTTPSecurityScheme: {
                                not: {
                                    type: string;
                                    properties: {
                                        scheme: {
                                            type: string;
                                            enum: string[];
                                        };
                                    };
                                };
                                type: string;
                                required: string[];
                                properties: {
                                    scheme: {
                                        type: string;
                                    };
                                    description: {
                                        type: string;
                                    };
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                            BearerHTTPSecurityScheme: {
                                type: string;
                                required: string[];
                                properties: {
                                    scheme: {
                                        type: string;
                                        enum: string[];
                                    };
                                    bearerFormat: {
                                        type: string;
                                    };
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    description: {
                                        type: string;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                            APIKeyHTTPSecurityScheme: {
                                type: string;
                                required: string[];
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    name: {
                                        type: string;
                                    };
                                    in: {
                                        type: string;
                                        enum: string[];
                                    };
                                    description: {
                                        type: string;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                            oauth2Flows: {
                                type: string;
                                required: string[];
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    description: {
                                        type: string;
                                    };
                                    flows: {
                                        type: string;
                                        properties: {
                                            implicit: {
                                                allOf: ({
                                                    $ref: string;
                                                    required?: undefined;
                                                    not?: undefined;
                                                } | {
                                                    required: string[];
                                                    $ref?: undefined;
                                                    not?: undefined;
                                                } | {
                                                    not: {
                                                        required: string[];
                                                    };
                                                    $ref?: undefined;
                                                    required?: undefined;
                                                })[];
                                            };
                                            password: {
                                                allOf: ({
                                                    $ref: string;
                                                    required?: undefined;
                                                    not?: undefined;
                                                } | {
                                                    required: string[];
                                                    $ref?: undefined;
                                                    not?: undefined;
                                                } | {
                                                    not: {
                                                        required: string[];
                                                    };
                                                    $ref?: undefined;
                                                    required?: undefined;
                                                })[];
                                            };
                                            clientCredentials: {
                                                allOf: ({
                                                    $ref: string;
                                                    required?: undefined;
                                                    not?: undefined;
                                                } | {
                                                    required: string[];
                                                    $ref?: undefined;
                                                    not?: undefined;
                                                } | {
                                                    not: {
                                                        required: string[];
                                                    };
                                                    $ref?: undefined;
                                                    required?: undefined;
                                                })[];
                                            };
                                            authorizationCode: {
                                                allOf: ({
                                                    $ref: string;
                                                    required?: undefined;
                                                } | {
                                                    required: string[];
                                                    $ref?: undefined;
                                                })[];
                                            };
                                        };
                                        additionalProperties: boolean;
                                        minProperties: number;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                            };
                            oauth2Flow: {
                                type: string;
                                properties: {
                                    authorizationUrl: {
                                        type: string;
                                        format: string;
                                    };
                                    tokenUrl: {
                                        type: string;
                                        format: string;
                                    };
                                    refreshUrl: {
                                        type: string;
                                        format: string;
                                    };
                                    scopes: {
                                        $ref: string;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                            oauth2Scopes: {
                                type: string;
                                additionalProperties: {
                                    type: string;
                                };
                            };
                            openIdConnect: {
                                type: string;
                                required: string[];
                                properties: {
                                    type: {
                                        type: string;
                                        enum: string[];
                                    };
                                    description: {
                                        type: string;
                                    };
                                    openIdConnectUrl: {
                                        type: string;
                                        format: string;
                                    };
                                };
                                patternProperties: {
                                    "^x-[\\w\\d.\\-_]+$": {
                                        $ref: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                            SecurityRequirement: {
                                type: string;
                                additionalProperties: {
                                    type: string;
                                    items: {
                                        type: string;
                                    };
                                    uniqueItems: boolean;
                                };
                            };
                        };
                    };
                };
            };
        };
        'asyncapi-server-no-empty-variable': {
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
        'asyncapi-server-no-trailing-slash': {
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
        'asyncapi-server-not-example-com': {
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
        'asyncapi-servers': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, import("@stoplight/spectral-functions").SchemaOptions>;
                functionOptions: {
                    schema: {
                        type: string;
                        minProperties: number;
                    };
                    allErrors: boolean;
                };
            };
        };
        'asyncapi-tag-description': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'asyncapi-tags-alphabetical': {
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
        'asyncapi-tags': {
            description: string;
            recommended: boolean;
            type: string;
            given: string;
            then: {
                field: string;
                function: import("../../../core/src").RulesetFunctionWithValidator<unknown, null>;
            };
        };
        'asyncapi-unused-components-schema': {
            description: string;
            recommended: boolean;
            type: string;
            resolved: boolean;
            given: string;
            then: {
                function: import("../../../core/src").RulesetFunctionWithValidator<Record<string, unknown>, import("@stoplight/spectral-functions").UnreferencedReusableObjectOptions>;
                functionOptions: {
                    reusableObjectsLocation: string;
                };
            };
        };
    };
};
export default _default;
