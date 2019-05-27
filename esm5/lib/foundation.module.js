var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgModule } from '@angular/core';
// Directives
import { ElevationDirective } from './directives/elevation.directive';
import { TypographyDirective } from './directives/typography.directive';
var directives = [
    ElevationDirective,
    TypographyDirective
];
var FoundationModule = /** @class */ (function () {
    function FoundationModule() {
    }
    FoundationModule = __decorate([
        NgModule({
            imports: [],
            exports: __spread(directives),
            declarations: __spread(directives)
        })
    ], FoundationModule);
    return FoundationModule;
}());
export { FoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvZm91bmRhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRS9DLGFBQWE7QUFDYixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV4RSxJQUFNLFVBQVUsR0FBbUI7SUFDakMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUNwQixDQUFDO0FBZUY7SUFBQTtJQUErQixDQUFDO0lBQW5CLGdCQUFnQjtRQWI1QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsRUFFUjtZQUVELE9BQU8sV0FDRixVQUFVLENBQ2Q7WUFFRCxZQUFZLFdBQ1AsVUFBVSxDQUNkO1NBQ0YsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQSxBQUFoQyxJQUFnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgeyBFbGV2YXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZWxldmF0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3R5cG9ncmFwaHkuZGlyZWN0aXZlJztcblxuY29uc3QgZGlyZWN0aXZlczogVHlwZTxvYmplY3Q+W10gPSBbXG4gIEVsZXZhdGlvbkRpcmVjdGl2ZSxcbiAgVHlwb2dyYXBoeURpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuXG4gIF0sXG5cbiAgZXhwb3J0czogW1xuICAgIC4uLmRpcmVjdGl2ZXNcbiAgXSxcblxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5kaXJlY3RpdmVzXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm91bmRhdGlvbk1vZHVsZSB7fVxuIl19