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
var TypographyDirective = /** @class */ (function (_super) {
    __extends(TypographyDirective, _super);
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
    TypographyDirective = __decorate([
        Directive({
            selector: '[dgTypography]',
            inputs: [
                'input: dgTypography'
            ]
        })
    ], TypographyDirective);
    return TypographyDirective;
}(StyleBuilder));
export { TypographyDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90eXBvZ3JhcGh5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVeEQ7SUFBeUMsdUNBQVk7SUFBckQ7O0lBVUEsQ0FBQztJQVRRLG1DQUFLLEdBQVosVUFBYSxLQUFhO1FBQ3hCLE9BQU87WUFDTCxXQUFXLEVBQUUsc0JBQW9CLEtBQUssaUJBQWM7WUFDcEQsYUFBYSxFQUFFLHNCQUFvQixLQUFLLG1CQUFnQjtZQUN4RCxhQUFhLEVBQUUsc0JBQW9CLEtBQUssbUJBQWdCO1lBQ3hELGFBQWEsRUFBRSxzQkFBb0IsS0FBSyxtQkFBZ0I7WUFDeEQsZ0JBQWdCLEVBQUUsc0JBQW9CLEtBQUssc0JBQW1CO1NBQy9ELENBQUM7SUFDSixDQUFDO0lBVFUsbUJBQW1CO1FBUC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFFMUIsTUFBTSxFQUFFO2dCQUNOLHFCQUFxQjthQUN0QjtTQUNGLENBQUM7T0FDVyxtQkFBbUIsQ0FVL0I7SUFBRCwwQkFBQztDQUFBLEFBVkQsQ0FBeUMsWUFBWSxHQVVwRDtTQVZZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3R5bGVCdWlsZGVyIH0gZnJvbSAnLi4vY2xhc3Nlcy9zdHlsZS1idWlsZGVyJztcbmltcG9ydCB7IFN0eWxlRGVjbGFyYXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3N0eWxlLWRlY2xhcmF0aW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RnVHlwb2dyYXBoeV0nLFxuXG4gIGlucHV0czogW1xuICAgICdpbnB1dDogZGdUeXBvZ3JhcGh5J1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFR5cG9ncmFwaHlEaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZUJ1aWxkZXIge1xuICBwdWJsaWMgYnVpbGQoaW5wdXQ6IHN0cmluZyk6IFN0eWxlRGVjbGFyYXRpb24ge1xuICAgIHJldHVybiB7XG4gICAgICAnZm9udC1zaXplJzogYHZhcigtLXR5cG9ncmFwaHktJHtpbnB1dH0tLWZvbnQtc2l6ZSlgLFxuICAgICAgJ2xpbmUtaGVpZ2h0JzogYHZhcigtLXR5cG9ncmFwaHktJHtpbnB1dH0tLWxpbmUtaGVpZ2h0KWAsXG4gICAgICAnZm9udC13ZWlnaHQnOiBgdmFyKC0tdHlwb2dyYXBoeS0ke2lucHV0fS0tZm9udC13ZWlnaHQpYCxcbiAgICAgICdmb250LWZhbWlseSc6IGB2YXIoLS10eXBvZ3JhcGh5LSR7aW5wdXR9LS1mb250LWZhbWlseSlgLFxuICAgICAgJ2xldHRlci1zcGFjaW5nJzogYHZhcigtLXR5cG9ncmFwaHktJHtpbnB1dH0tLWxldHRlci1zcGFjaW5nKWBcbiAgICB9O1xuICB9XG59XG4iXX0=