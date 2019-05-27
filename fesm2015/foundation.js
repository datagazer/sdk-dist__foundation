import { RendererStyleFlags2, Directive, ɵɵdefineInjectable, Injectable, NgModule } from '@angular/core';

class StyleBuilder {
    constructor(_elementRef, _keyValueDiffers, _renderer, _type) {
        this._elementRef = _elementRef;
        this._keyValueDiffers = _keyValueDiffers;
        this._renderer = _renderer;
        this._type = _type;
        this._differ = this._keyValueDiffers.find({}).create();
    }
    set input(value) {
        let input = this._type.toString(value);
        {
            let changes = this._differ.diff(input ? this.build(input) : {});
            if (changes) {
                this._applyChanges(changes);
            }
        }
    }
    _applyChanges(changes) {
        changes.forEachItem(({ key: style, currentValue: value }) => {
            this._renderer.setStyle(this._elementRef.nativeElement, style, value, RendererStyleFlags2.DashCase);
        });
    }
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ElevationDirective = class ElevationDirective extends StyleBuilder {
    build(input) {
        return {
            'box-shadow': `var(--elevation-z${input}--box-shadow)`
        };
    }
};
ElevationDirective = __decorate([
    Directive({
        selector: '[dgElevation]',
        inputs: [
            'input: dgElevation'
        ]
    })
], ElevationDirective);

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let TypographyDirective = class TypographyDirective extends StyleBuilder {
    build(input) {
        return {
            'font-size': `var(--typography-${input}--font-size)`,
            'line-height': `var(--typography-${input}--line-height)`,
            'font-weight': `var(--typography-${input}--font-weight)`,
            'font-family': `var(--typography-${input}--font-family)`,
            'letter-spacing': `var(--typography-${input}--letter-spacing)`
        };
    }
};
TypographyDirective = __decorate$1([
    Directive({
        selector: '[dgTypography]',
        inputs: [
            'input: dgTypography'
        ]
    })
], TypographyDirective);

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let TypeService = class TypeService {
    isVoid(value) {
        return value === undefined || value === null;
    }
    toString(value) {
        if (!this.isVoid(value)) {
            return String(value);
        }
        return null;
    }
    toNumber(value) {
        if (!this.isVoid(value)) {
            return Number(value);
        }
        return null;
    }
    toBoolean(value) {
        if (!this.isVoid(value)) {
            if (typeof value === 'string') {
                return value !== 'false';
            }
            return Boolean(value);
        }
        return null;
    }
    toDate(value) {
        if (!this.isVoid(value)) {
            let date = new Date(value);
            return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
        }
        return null;
    }
};
TypeService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TypeService_Factory() { return new TypeService(); }, token: TypeService, providedIn: "root" });
TypeService = __decorate$2([
    Injectable({
        providedIn: 'root'
    })
], TypeService);

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const directives = [
    ElevationDirective,
    TypographyDirective
];
let FoundationModule = class FoundationModule {
};
FoundationModule = __decorate$3([
    NgModule({
        imports: [],
        exports: [
            ...directives
        ],
        declarations: [
            ...directives
        ]
    })
], FoundationModule);

// Classes

/**
 * Generated bundle index. Do not edit.
 */

export { ElevationDirective, FoundationModule, StyleBuilder, TypeService, TypographyDirective };
//# sourceMappingURL=foundation.js.map
