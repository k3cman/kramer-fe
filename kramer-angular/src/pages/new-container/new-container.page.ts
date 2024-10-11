import {AfterViewInit, Component, inject, ViewEncapsulation} from '@angular/core';
import Keyboard from "simple-keyboard";
import {Router, RouterLink} from '@angular/router';
import {ProductTestStore} from '../../core/store/product-test.store';

@Component({
  standalone: true,
  selector: 'page-new-container',
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterLink
  ],
  template: `
    <div class="flex flex-col p-1.5 w-full">
      <div class="flex flex-col w-full mb-2">
        <span>Container number will be added to test report</span>
        <div class="flex flex">
          <div class="border-gray-400 border rounded flex-1">
            <input class="block w-full h-[30px] !border !border-gray-400 rounded" (input)="onInputChange($event)"
                   class="input"
                   value={{value}}
                   placeholder=""/>
          </div>
          <div class="ml-2 w-[30px] bg-gray-400 text-white flex items-center justify-center">X</div>
        </div>
      </div>
      <div class="simple-keyboard"></div>
      <div class="flex items-center justify-between w-full h-[75px] gap-1">
        <div class="h-full flex-1 bg-kramer-light"></div>
        <div class="h-full flex-1 bg-kramer-light"></div>
        <div class="h-full flex-1 bg-kramer-light"></div>
        <div class="h-full flex-1 bg-kramer-light"></div>
        <div class="h-full flex-1 bg-kramer flex items-center justify-center text-white" routerLink="../container">X
        </div>
        <div class="h-full flex-1 bg-kramer  flex items-center justify-center text-white" (click)="createContainer()">OK
        </div>
      </div>
    </div>

  `
})
export class NewContainerPage implements AfterViewInit {
  readonly productTestStore = inject(ProductTestStore)
  readonly router = inject(Router)
  value = "";
  keyboard!: Keyboard;

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
  }

  onChange = (input: string) => {
    this.value = input;
  };

  onKeyPress = (button: string) => {

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };

  createContainer() {
    this.productTestStore.addContainer(this.value)
    this.router.navigate(['run-test', 'container'])
  }
}
