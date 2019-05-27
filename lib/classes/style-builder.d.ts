import { ElementRef, KeyValueDiffers, Renderer2 } from '@angular/core';
import { StyleDeclaration } from '../interfaces/style-declaration';
import { TypeService } from '../services/type.service';
export declare abstract class StyleBuilder {
    private _elementRef;
    private _keyValueDiffers;
    private _renderer;
    private _type;
    input: any;
    private _differ;
    constructor(_elementRef: ElementRef<HTMLElement>, _keyValueDiffers: KeyValueDiffers, _renderer: Renderer2, _type: TypeService);
    protected abstract build(input: string): StyleDeclaration;
    private _applyChanges;
}
