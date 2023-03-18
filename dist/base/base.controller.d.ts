import { ControllerClass } from '@loopback/core';
import { CrudRestControllerOptions } from '@loopback/rest-crud';
import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SchemaObject } from '@loopback/rest';
import { BaseIdEntity, BaseTzEntity, AbstractTzRepository } from './';
import { EntityRelation, IController, IdType, NullableType, TRelationType } from '../common/types';
import { ApplicationLogger } from '../helpers';
import { Class } from '@loopback/service-proxy';
export declare class BaseController implements IController {
    protected logger: ApplicationLogger;
    constructor(opts: {
        scope?: string;
    });
}
export declare const getIdSchema: <E extends BaseIdEntity<IdType>>(entity: typeof BaseIdEntity & {
    prototype: E;
}) => SchemaObject;
export interface CrudControllerOptions<E extends BaseIdEntity<IdType>> {
    entity: typeof BaseIdEntity & {
        prototype: E;
    };
    repository: {
        name: string;
    };
    controller: CrudRestControllerOptions;
}
export declare const defineCrudController: <E extends BaseTzEntity<IdType>>(opts: CrudControllerOptions<E>) => {
    new (repository: AbstractTzRepository<E, EntityRelation>): {
        repository: AbstractTzRepository<E, EntityRelation>;
        find(filter?: Filter<E> | undefined): Promise<(E & EntityRelation)[]>;
        findById(id: IdType, filter?: FilterExcludingWhere<E> | undefined): Promise<E & EntityRelation>;
        count(where?: Where<E> | undefined): Promise<Count>;
    };
};
export interface RelationCrudControllerOptions {
    association: {
        source: string;
        relationName: string;
        relationType: TRelationType;
        target: string;
    };
    schema: {
        source?: SchemaObject;
        relation?: SchemaObject;
        target: SchemaObject;
    };
    options?: {
        controlTarget: boolean;
    };
}
export declare const defineRelationViewController: <S extends BaseTzEntity<IdType>, T extends BaseTzEntity<IdType>>(opts: {
    baseClass?: Class<BaseController>;
    relationType: TRelationType;
    relationName: string;
}) => ControllerClass;
export declare const defineAssociateController: <S extends BaseTzEntity<IdType>, T extends BaseTzEntity<IdType>, R extends BaseTzEntity<IdType> | NullableType>(opts: {
    baseClass?: Class<BaseController>;
    relationName: string;
}) => ControllerClass;
export declare const defineRelationCrudController: <S extends BaseTzEntity<IdType>, T extends BaseTzEntity<IdType>, R extends BaseTzEntity<IdType> | NullableType>(controllerOptions: RelationCrudControllerOptions) => ControllerClass;
