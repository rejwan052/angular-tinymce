import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tinymce';
  reportText: string;

  public tinyMceSettings = {
    base_url: '/tinymce', // Root for resources
    suffix: '.min',       // Suffix to use when loading resources
    skin_url: 'assets/tinymce/skins/ui/oxide',
    skin: "oxide",
    content_css: ['assets/tinymce/skins/ui/oxide/content.min.css',"assets/css/custom-tinymce.css"],
    inline: false,
    statusbar: false,
    browser_spellcheck: true,
    height: 500,
    extended_valid_elements : "b/strong,i/em",
    formats: {
        bold: {inline: 'b'},  
        italic: {inline: 'i'}
    },
    plugins: 'advlist lists table searchreplace insertdatetime autolink visualblocks visualchars fullscreen image link hr pagebreak nonbreaking anchor toc wordcount imagetools textpattern',
    toolbar: "undo redo | styleselect | bold italic underline subscript superscript removeformat | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | fontsizeselect",
    setup: (editor) => {
        let that = this;
        editor.on('keydown', function (e) {
          if (e.keyCode == 32 && e.ctrlKey) {
              
          }
        });
    }
  };

}
