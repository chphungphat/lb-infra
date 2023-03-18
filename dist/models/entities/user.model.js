"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWithAuthorize = exports.User = void 0;
const repository_1 = require("@loopback/repository");
const common_1 = require("../../common");
const base_1 = require("../../base");
const mixins_1 = require("../../mixins");
class User extends base_1.BaseTzEntity {
    constructor(data) {
        super(data);
    }
}
__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    __metadata("design:type", String)
], User.prototype, "realm", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: common_1.UserStatuses.UNKNOWN,
        postgresql: {
            columnName: 'status',
            dataType: 'text',
        },
    }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: common_1.UserTypes.SYSTEM,
        postgresql: {
            columnName: 'user_type',
            dataType: 'text',
        },
    }),
    __metadata("design:type", String)
], User.prototype, "userType", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'date',
        postgresql: {
            columnName: 'activated_at',
            dataType: 'TIMESTAMP WITH TIME ZONE',
        },
    }),
    __metadata("design:type", Date)
], User.prototype, "activatedAt", void 0);
__decorate([
    (0, repository_1.property)({
        type: 'date',
        postgresql: {
            columnName: 'last_login_at',
            dataType: 'TIMESTAMP WITH TIME ZONE',
        },
    }),
    __metadata("design:type", Date)
], User.prototype, "lastLoginAt", void 0);
exports.User = User;
class UserWithAuthorize extends (0, mixins_1.UserAuthorizeMixin)(User) {
}
exports.UserWithAuthorize = UserWithAuthorize;
//# sourceMappingURL=user.model.js.map