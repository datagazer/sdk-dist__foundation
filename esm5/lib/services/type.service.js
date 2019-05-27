var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    TypeService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TypeService_Factory() { return new TypeService(); }, token: TypeService, providedIn: "root" });
    TypeService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], TypeService);
    return TypeService;
}());
export { TypeService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3R5cGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQztJQUFBO0tBb0RDO0lBbkRRLDRCQUFNLEdBQWIsVUFBYyxLQUFVO1FBQ3RCLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0lBQy9DLENBQUM7SUFFTSw4QkFBUSxHQUFmLFVBQWdCLEtBQVU7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSw4QkFBUSxHQUFmLFVBQWdCLEtBQVU7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSwrQkFBUyxHQUFoQixVQUFpQixLQUFVO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUM3QixPQUFPLEtBQUssS0FBSyxPQUFPLENBQUM7YUFDMUI7WUFFRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLDRCQUFNLEdBQWIsVUFBYyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTNCLE9BQU8sSUFBSSxJQUFJLENBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FDTixJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixJQUFJLENBQUMsT0FBTyxFQUFFLEVBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUNqQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3ZCLENBQ0YsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztJQW5EVSxXQUFXO1FBSHZCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxXQUFXLENBb0R2QjtzQkF6REQ7Q0F5REMsQUFwREQsSUFvREM7U0FwRFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHlwZVNlcnZpY2Uge1xuICBwdWJsaWMgaXNWb2lkKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyB2b2lkIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZyh2YWx1ZTogYW55KTogc3RyaW5nIHwgbnVsbCB7XG4gICAgaWYgKCF0aGlzLmlzVm9pZCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHRvTnVtYmVyKHZhbHVlOiBhbnkpOiBudW1iZXIgfCBudWxsIHtcbiAgICBpZiAoIXRoaXMuaXNWb2lkKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgdG9Cb29sZWFuKHZhbHVlOiBhbnkpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgaWYgKCF0aGlzLmlzVm9pZCh2YWx1ZSkpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gJ2ZhbHNlJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHRvRGF0ZSh2YWx1ZTogYW55KTogRGF0ZSB8IG51bGwge1xuICAgIGlmICghdGhpcy5pc1ZvaWQodmFsdWUpKSB7XG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcblxuICAgICAgcmV0dXJuIG5ldyBEYXRlKFxuICAgICAgICBEYXRlLlVUQyhcbiAgICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgZGF0ZS5nZXRNb250aCgpLFxuICAgICAgICAgIGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgICAgIGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgICAgICBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICBkYXRlLmdldFNlY29uZHMoKSxcbiAgICAgICAgICBkYXRlLmdldE1pbGxpc2Vjb25kcygpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==