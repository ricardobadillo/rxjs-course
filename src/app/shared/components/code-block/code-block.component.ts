// Angular.
import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

// Prism.js.
import * as Prism from 'prismjs';



@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements AfterViewInit, OnChanges {

  @ViewChild('codeElement') codeElement!: ElementRef;
  @Input() code?: string;
  @Input() language?: string;

  
  constructor() { }

  ngAfterViewInit(): void {
    Prism.highlightElement(this.codeElement.nativeElement);
  }
  
  ngOnChanges(changes: any): void {
    if (changes?.code) {
      if (this.codeElement?.nativeElement) {
        this.codeElement.nativeElement.textContent = this.code;
        Prism.highlightElement(this.codeElement.nativeElement);
      }
    }
  }
}