var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from '@angular/core';
import { StyleBuilder } from '../classes/style-builder';
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
TypographyDirective = __decorate([
    Directive({
        selector: '[dgTypography]',
        inputs: [
            'input: dgTypography'
        ]
    })
], TypographyDirective);
export { TypographyDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90eXBvZ3JhcGh5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVV4RCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLFlBQVk7SUFDNUMsS0FBSyxDQUFDLEtBQWE7UUFDeEIsT0FBTztZQUNMLFdBQVcsRUFBRSxvQkFBb0IsS0FBSyxjQUFjO1lBQ3BELGFBQWEsRUFBRSxvQkFBb0IsS0FBSyxnQkFBZ0I7WUFDeEQsYUFBYSxFQUFFLG9CQUFvQixLQUFLLGdCQUFnQjtZQUN4RCxhQUFhLEVBQUUsb0JBQW9CLEtBQUssZ0JBQWdCO1lBQ3hELGdCQUFnQixFQUFFLG9CQUFvQixLQUFLLG1CQUFtQjtTQUMvRCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFWWSxtQkFBbUI7SUFQL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUUxQixNQUFNLEVBQUU7WUFDTixxQkFBcUI7U0FDdEI7S0FDRixDQUFDO0dBQ1csbUJBQW1CLENBVS9CO1NBVlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHlsZUJ1aWxkZXIgfSBmcm9tICcuLi9jbGFzc2VzL3N0eWxlLWJ1aWxkZXInO1xuaW1wb3J0IHsgU3R5bGVEZWNsYXJhdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMvc3R5bGUtZGVjbGFyYXRpb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdUeXBvZ3JhcGh5XScsXG5cbiAgaW5wdXRzOiBbXG4gICAgJ2lucHV0OiBkZ1R5cG9ncmFwaHknXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVHlwb2dyYXBoeURpcmVjdGl2ZSBleHRlbmRzIFN0eWxlQnVpbGRlciB7XG4gIHB1YmxpYyBidWlsZChpbnB1dDogc3RyaW5nKTogU3R5bGVEZWNsYXJhdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmb250LXNpemUnOiBgdmFyKC0tdHlwb2dyYXBoeS0ke2lucHV0fS0tZm9udC1zaXplKWAsXG4gICAgICAnbGluZS1oZWlnaHQnOiBgdmFyKC0tdHlwb2dyYXBoeS0ke2lucHV0fS0tbGluZS1oZWlnaHQpYCxcbiAgICAgICdmb250LXdlaWdodCc6IGB2YXIoLS10eXBvZ3JhcGh5LSR7aW5wdXR9LS1mb250LXdlaWdodClgLFxuICAgICAgJ2ZvbnQtZmFtaWx5JzogYHZhcigtLXR5cG9ncmFwaHktJHtpbnB1dH0tLWZvbnQtZmFtaWx5KWAsXG4gICAgICAnbGV0dGVyLXNwYWNpbmcnOiBgdmFyKC0tdHlwb2dyYXBoeS0ke2lucHV0fS0tbGV0dGVyLXNwYWNpbmcpYFxuICAgIH07XG4gIH1cbn1cbiJdfQ==