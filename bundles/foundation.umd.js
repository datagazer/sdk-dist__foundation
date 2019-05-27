(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@datagazer/foundation', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.datagazer = global.datagazer || {}, global.datagazer.foundation = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

    var StyleBuilder = /** @class */ (function () {
        function StyleBuilder(_elementRef, _keyValueDiffers, _renderer, _type) {
            this._elementRef = _elementRef;
            this._keyValueDiffers = _keyValueDiffers;
            this._renderer = _renderer;
            this._type = _type;
            this._differ = this._keyValueDiffers.find({}).create();
        }
        Object.defineProperty(StyleBuilder.prototype, "input", {
            set: function (value) {
                var input = this._type.toString(value);
                {
                    var changes = this._differ.diff(input ? this.build(input) : {});
                    if (changes) {
                        this._applyChanges(changes);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        StyleBuilder.prototype._applyChanges = function (changes) {
            var _this = this;
            changes.forEachItem(function (_a) {
                var style = _a.key, value = _a.currentValue;
                _this._renderer.setStyle(_this._elementRef.nativeElement, style, value, core.RendererStyleFlags2.DashCase);
            });
        };
        return StyleBuilder;
    }());

    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ElevationDirective = /** @class */ (function (_super) {
        __extends(ElevationDirective, _super);
        function ElevationDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ElevationDirective.prototype.build = function (input) {
            return {
                'box-shadow': "var(--elevation-z" + input + "--box-shadow)"
            };
        };
        ElevationDirective = __decorate([
            core.Directive({
                selector: '[dgElevation]',
                inputs: [
                    'input: dgElevation'
                ]
            })
        ], ElevationDirective);
        return ElevationDirective;
    }(StyleBuilder));

    var __extends$1 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var TypographyDirective = /** @class */ (function (_super) {
        __extends$1(TypographyDirective, _super);
        function TypographyDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TypographyDirective.prototype.build = function (input) {
            return {
                'font-size': "var(--typography-" + input + "--font-size)",
                'line-height': "var(--typography-" + input + "--line-height)",
                'font-weight': "var(--typography-" + input + "--font-weight)",
                'font-family': "var(--typography-" + input + "--font-family)",
                'letter-spacing': "var(--typography-" + input + "--letter-spacing)"
            };
        };
        TypographyDirective = __decorate$1([
            core.Directive({
                selector: '[dgTypography]',
                inputs: [
                    'input: dgTypography'
                ]
            })
        ], TypographyDirective);
        return TypographyDirective;
    }(StyleBuilder));

    var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var TypeService = /** @class */ (function () {
        function TypeService() {
        }
        TypeService.prototype.isVoid = function (value) {
            return value === undefined || value === null;
        };
        TypeService.prototype.toString = function (value) {
            if (!this.isVoid(value)) {
                return String(value);
            }
            return null;
        };
        TypeService.prototype.toNumber = function (value) {
            if (!this.isVoid(value)) {
                return Number(value);
            }
            return null;
        };
        TypeService.prototype.toBoolean = function (value) {
            if (!this.isVoid(value)) {
                if (typeof value === 'string') {
                    return value !== 'false';
                }
                return Boolean(value);
            }
            return null;
        };
        TypeService.prototype.toDate = function (value) {
            if (!this.isVoid(value)) {
                var date = new Date(value);
                return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
            }
            return null;
        };
        TypeService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TypeService_Factory() { return new TypeService(); }, token: TypeService, providedIn: "root" });
        TypeService = __decorate$2([
            core.Injectable({
                providedIn: 'root'
            })
        ], TypeService);
        return TypeService;
    }());

    var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread = (this && this.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    var directives = [
        ElevationDirective,
        TypographyDirective
    ];
    var FoundationModule = /** @class */ (function () {
        function FoundationModule() {
        }
        FoundationModule = __decorate$3([
            core.NgModule({
                imports: [],
                exports: __spread(directives),
                declarations: __spread(directives)
            })
        ], FoundationModule);
        return FoundationModule;
    }());

    exports.ElevationDirective = ElevationDirective;
    exports.FoundationModule = FoundationModule;
    exports.StyleBuilder = StyleBuilder;
    exports.TypeService = TypeService;
    exports.TypographyDirective = TypographyDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=foundation.umd.js.map
