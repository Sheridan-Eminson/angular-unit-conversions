import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ConversionFormsComponent } from "./conversion-forms/conversion-forms.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ConversionFormsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
