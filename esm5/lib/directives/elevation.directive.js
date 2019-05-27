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
import { Directive } from '@angular/core';
import { StyleBuilder } from '../classes/style-builder';
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
        Directive({
            selector: '[dgElevation]',
            inputs: [
                'input: dgElevation'
            ]
        })
    ], ElevationDirective);
    return ElevationDirective;
}(StyleBuilder));
export { ElevationDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2VsZXZhdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVXhEO0lBQXdDLHNDQUFZO0lBQXBEOztJQU1BLENBQUM7SUFMUSxrQ0FBSyxHQUFaLFVBQWEsS0FBYTtRQUN4QixPQUFPO1lBQ0wsWUFBWSxFQUFFLHNCQUFvQixLQUFLLGtCQUFlO1NBQ3ZELENBQUM7SUFDSixDQUFDO0lBTFUsa0JBQWtCO1FBUDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBRXpCLE1BQU0sRUFBRTtnQkFDTixvQkFBb0I7YUFDckI7U0FDRixDQUFDO09BQ1csa0JBQWtCLENBTTlCO0lBQUQseUJBQUM7Q0FBQSxBQU5ELENBQXdDLFlBQVksR0FNbkQ7U0FOWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0eWxlQnVpbGRlciB9IGZyb20gJy4uL2NsYXNzZXMvc3R5bGUtYnVpbGRlcic7XG5pbXBvcnQgeyBTdHlsZURlY2xhcmF0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdHlsZS1kZWNsYXJhdGlvbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0VsZXZhdGlvbl0nLFxuXG4gIGlucHV0czogW1xuICAgICdpbnB1dDogZGdFbGV2YXRpb24nXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRWxldmF0aW9uRGlyZWN0aXZlIGV4dGVuZHMgU3R5bGVCdWlsZGVyIHtcbiAgcHVibGljIGJ1aWxkKGlucHV0OiBzdHJpbmcpOiBTdHlsZURlY2xhcmF0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2JveC1zaGFkb3cnOiBgdmFyKC0tZWxldmF0aW9uLXoke2lucHV0fS0tYm94LXNoYWRvdylgXG4gICAgfTtcbiAgfVxufVxuIl19