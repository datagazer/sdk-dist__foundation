var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
// Directives
import { ElevationDirective } from './directives/elevation.directive';
import { TypographyDirective } from './directives/typography.directive';
const directives = [
    ElevationDirective,
    TypographyDirective
];
let FoundationModule = class FoundationModule {
};
FoundationModule = __decorate([
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
export { FoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvZm91bmRhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxhQUFhO0FBQ2IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFeEUsTUFBTSxVQUFVLEdBQW1CO0lBQ2pDLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDcEIsQ0FBQztBQWVGLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0NBQUcsQ0FBQTtBQUFuQixnQkFBZ0I7SUFiNUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLEVBRVI7UUFFRCxPQUFPLEVBQUU7WUFDUCxHQUFHLFVBQVU7U0FDZDtRQUVELFlBQVksRUFBRTtZQUNaLEdBQUcsVUFBVTtTQUNkO0tBQ0YsQ0FBQztHQUNXLGdCQUFnQixDQUFHO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCB7IEVsZXZhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9lbGV2YXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IFR5cG9ncmFwaHlEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdHlwb2dyYXBoeS5kaXJlY3RpdmUnO1xuXG5jb25zdCBkaXJlY3RpdmVzOiBUeXBlPG9iamVjdD5bXSA9IFtcbiAgRWxldmF0aW9uRGlyZWN0aXZlLFxuICBUeXBvZ3JhcGh5RGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG5cbiAgXSxcblxuICBleHBvcnRzOiBbXG4gICAgLi4uZGlyZWN0aXZlc1xuICBdLFxuXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmRpcmVjdGl2ZXNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb3VuZGF0aW9uTW9kdWxlIHt9XG4iXX0=