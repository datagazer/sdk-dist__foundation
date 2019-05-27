import { RendererStyleFlags2 } from '@angular/core';
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
            _this._renderer.setStyle(_this._elementRef.nativeElement, style, value, RendererStyleFlags2.DashCase);
        });
    };
    return StyleBuilder;
}());
export { StyleBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL3N0eWxlLWJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEyRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk3SDtJQWVFLHNCQUNVLFdBQW9DLEVBQ3BDLGdCQUFpQyxFQUNqQyxTQUFvQixFQUVwQixLQUFrQjtRQUpsQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBRXBCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFQcEIsWUFBTyxHQUEwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBUTlGLENBQUM7SUFwQkosc0JBQVcsK0JBQUs7YUFBaEIsVUFBaUIsS0FBVTtZQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV2QztnQkFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUVoRSxJQUFJLE9BQU8sRUFBRTtvQkFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM3QjthQUNGO1FBQ0gsQ0FBQzs7O09BQUE7SUFjTyxvQ0FBYSxHQUFyQixVQUFzQixPQUErQztRQUFyRSxpQkFJQztRQUhDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBQyxFQUFtQztnQkFBakMsY0FBVSxFQUFFLHVCQUFtQjtZQUNwRCxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RHLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEtleVZhbHVlQ2hhbmdlcywgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgUmVuZGVyZXIyLCBSZW5kZXJlclN0eWxlRmxhZ3MyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHlsZURlY2xhcmF0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zdHlsZS1kZWNsYXJhdGlvbic7XG5pbXBvcnQgeyBUeXBlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3R5cGUuc2VydmljZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHlsZUJ1aWxkZXIge1xuICBwdWJsaWMgc2V0IGlucHV0KHZhbHVlOiBhbnkpIHtcbiAgICBsZXQgaW5wdXQgPSB0aGlzLl90eXBlLnRvU3RyaW5nKHZhbHVlKTtcblxuICAgIHtcbiAgICAgIGxldCBjaGFuZ2VzID0gdGhpcy5fZGlmZmVyLmRpZmYoaW5wdXQgPyB0aGlzLmJ1aWxkKGlucHV0KSA6IHt9KTtcblxuICAgICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5fYXBwbHlDaGFuZ2VzKGNoYW5nZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RpZmZlcjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBzdHJpbmcgfCBudWxsPiA9IHRoaXMuX2tleVZhbHVlRGlmZmVycy5maW5kKHt9KS5jcmVhdGUoKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfa2V5VmFsdWVEaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcblxuICAgIHByaXZhdGUgX3R5cGU6IFR5cGVTZXJ2aWNlXG4gICkge31cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgYnVpbGQoaW5wdXQ6IHN0cmluZyk6IFN0eWxlRGVjbGFyYXRpb247XG5cbiAgcHJpdmF0ZSBfYXBwbHlDaGFuZ2VzKGNoYW5nZXM6IEtleVZhbHVlQ2hhbmdlczxzdHJpbmcsIHN0cmluZyB8IG51bGw+KTogdm9pZCB7XG4gICAgY2hhbmdlcy5mb3JFYWNoSXRlbSgoeyBrZXk6IHN0eWxlLCBjdXJyZW50VmFsdWU6IHZhbHVlIH0pID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgc3R5bGUsIHZhbHVlLCBSZW5kZXJlclN0eWxlRmxhZ3MyLkRhc2hDYXNlKTtcbiAgICB9KTtcbiAgfVxufVxuIl19