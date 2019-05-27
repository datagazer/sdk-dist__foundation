var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from '@angular/core';
import { StyleBuilder } from '../classes/style-builder';
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
export { ElevationDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2VsZXZhdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVeEQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBbUIsU0FBUSxZQUFZO0lBQzNDLEtBQUssQ0FBQyxLQUFhO1FBQ3hCLE9BQU87WUFDTCxZQUFZLEVBQUUsb0JBQW9CLEtBQUssZUFBZTtTQUN2RCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFOWSxrQkFBa0I7SUFQOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFFekIsTUFBTSxFQUFFO1lBQ04sb0JBQW9CO1NBQ3JCO0tBQ0YsQ0FBQztHQUNXLGtCQUFrQixDQU05QjtTQU5ZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3R5bGVCdWlsZGVyIH0gZnJvbSAnLi4vY2xhc3Nlcy9zdHlsZS1idWlsZGVyJztcbmltcG9ydCB7IFN0eWxlRGVjbGFyYXRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3N0eWxlLWRlY2xhcmF0aW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RnRWxldmF0aW9uXScsXG5cbiAgaW5wdXRzOiBbXG4gICAgJ2lucHV0OiBkZ0VsZXZhdGlvbidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFbGV2YXRpb25EaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZUJ1aWxkZXIge1xuICBwdWJsaWMgYnVpbGQoaW5wdXQ6IHN0cmluZyk6IFN0eWxlRGVjbGFyYXRpb24ge1xuICAgIHJldHVybiB7XG4gICAgICAnYm94LXNoYWRvdyc6IGB2YXIoLS1lbGV2YXRpb24teiR7aW5wdXR9LS1ib3gtc2hhZG93KWBcbiAgICB9O1xuICB9XG59XG4iXX0=