
Noehtml
=======

Description
-----------

The Noehtml library is a helpful tool for front end designers to write clean, organized code and save 40% of their development time. Its goal is to make it easier for front end developers to create HTML pages that are easy for back end developers to read and work with.

Goal
----

The goal is to make it easier for front end developers to create HTML pages that are easy for back end developers to read and work with.

How it works
------------
Noehtml is a library that allows you to write HTML code in a more organized and readable way. It does this by allowing you to use tags to generate random text, images, and table data. It also allows you to repeat content a certain number of times, and translate content into different languages.

### Example

    <repeat count="2"first="active"> 
       <div>
          <h1>Hello World</h1>
       </div>
    </repeat>

### Rendered Results 
##### Rendered Results Mean this is what the browser will render
HTML code that will be rendered by the browser
-----

    <div class="active">
        <h1>Hello World</h1>
    </div>
    <div>
        <h1>Hello World</h1>
    </div>

Features
--------

*  Generates random text based on type and your needs
*  Generates random images based on type and your needs (styles)
*  Generates random table data based on style and template
*  Repeats content a certain number of times
*  Renders content in different languages
*  Render Content From Template File (HTML, JSON, XML, CSV, TXT, etc)
*  translate content into different languages
*  Generate Trnalation button and make it easy to translate content


Notices
-------
   * *this library is still under development and it's not ready for production yet*.
   * *if you have any suggestions or ideas please feel free to contact us*.
   * *all this tags must be removed by back end developer its just for front end developer to write clean code and save time and make it easy to read and understand , its helper tool not a library to be used in production*.
   * *this library is not a replacement for any other library or framework*.

---

Tags Documentation And Reference
-------------

### Tags :

*   ##### repeat ( `count` , `first` )
*   ##### ftext ( `type` , `len` , `min` , `max` )
*   ##### fimg ( `type` , `width` , `height` , `min` , `max` )
*   ##### ftdata ( `count` , `stype`)
*   ##### fsdata ( `count` , `type`)
*   ##### tmp( `src`)
*   ##### trans( `ar`, `en`, `fr`, `es`,...etc)
*   ##### transGroup
*   ##### transGroupItem( `lang` , `default` )
 
1- repeat
---
---------

The `repeat` tag is used to repeat the content within it a certain number of times, as specified by the `count` attribute. It also adds a class to the first element within the repeated content using the `first` attribute.

### Example usage:

    <repeat count="2"first="active"> 
       <div>
          <h1>Hello World</h1>
       </div>
    </repeat>

#### Rendered Results
    <div class="active">
        <h1>Hello World</h1>
    </div>
    <div>
        <h1>Hello World</h1>
    </div>

2- ftext
---
--------

The `ftext` tag is used to generate random text. It can be used to generate text of a certain type, length, or range using the `type`, `len`, `min`, and `max` attributes.

`type` can be one of the following:

*   `words` - generates a random number of words between 1 and 10
*   `sentences` - generates a random number of sentences between 1 and 10
*   `paragraphs` - generates a random number of paragraphs between 1 and 10
*   `number` - generates a random number between 1 and 10
*   `date` - generates a random date between 1/1/2000 and 1/1/2020
*   `email` - generates a random email address
*   `name` - generates a random name
*   `phone` - generates a random phone number
*   `address` - generates a random address
*   `city` - generates a random city
*   `state` - generates a random state
*   `zip` - generates a random zip code
*   `country` - generates a random country
*   `company` - generates a random company name
*   `job` - generates a random job title
*   `ip` - generates a random IP address
*   `url` - generates a random URL
*   `color` - generates a random color
*   `hex` - generates a random hex color
*   `rgb` - generates a random rgb color
*   `hsl` - generates a random hsl color
*   `lorem` - generates a random lorem ipsum text

`len` can be used to specify the length of the generated text. It can be used with the following types:

*   `words` - specifies the number of words to generate
*   `sentences` - specifies the number of sentences to generate
*   `paragraphs` - specifies the number of paragraphs to generate
*   `number` - specifies the number of digits to generate

`min` can be used to specify the minimum value of the generated text. It can be used with the following types:

*   `number` - specifies the minimum number to generate
*   `date` - specifies the minimum date to generate

`max` can be used to specify the maximum value of the generated text. It can be used with the following types:

*   `number` - specifies the maximum number to generate
*   `date` - specifies the maximum date to generate

### Example usage:

    <ftext type="words"len="5">
  

#### Rendered Results

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

### Other Example

    <ftext type="number"min="1000"max="9999">

#### Rendered Results

    <p> 3512 or another random number </p>

### Other Example

    <ftext type="date"min="1/1/2000"max="1/1/2020">

#### Rendered Results

    <p> 1/1/2000 or another random date </p>

3- fimg
---
-------

Generates a random image from [Lorem Picsum](https://picsum.photos/)

this tag can be used with the following attributes:

*   `type` - specifies the type of the image to generate. It can be one of the following values:
    *   `random` - generates a random image
    *   `grayscale` - generates a random grayscale image
    *   `blur` - generates a random blurred image
    *   `cover` - generates a random cover image
    *   `profile` - generates a random profile image
*   `width` - specifies the width of the image to generate
*   `height` - specifies the height of the image to generate

if no width or height is specified, a random width and height will be generated

if no type is specified, a random image will be generated

### Example usage:

        <fimg type="random" >
#### Rendered Results

    <img src="https://picsum.photos/200/300" alt="random image"> or another random image

### Other Example
    
        <fimg type="grayscale" width="200" height="300">
#### Rendered Results
    
        <img src="https://picsum.photos/200/300?grayscale" alt="grayscale image"> or another grayscale image

4- ftdata
---
---------

Generates a random table data based on the number of rows and columns specified by the `count` attribute.
and style of the table data specified by the `stype` attribute.
this element will also use `ftmp` for a template for the table data.

this tag can be used with the following attributes:
  *  `count` - specifies the number of rows and columns to generate
  *  `stype` - specifies style of the table data to generate. It can be one of the following values:
     *  `random` - generates a random table data
     *  `striped` - generates a striped table data
     *  `bordered` - generates a bordered table data
     *  `hover` - generates a hover table data
     *  `bordered striped` - generates a bordered striped table data
     *  `bordered hover` - generates a bordered hover table data
     *  `striped hover` - generates a striped hover table data
     *  `bordered striped hover` - generates a bordered striped hover table data
  * `ftmp` - its a tag that will be used as a template for the table data and this dose have an attribute called `colors` , this attribute can be used to specify the colors theme of the table data to generate. It can be one of the following values:
     * `dark-white` - generates a black-white table data
     * `white-dark` - generates a white-black table data
     * `red-white` - generates a red-white table data
     * `white-red` - generates a white-red table data
     * `green-white` - generates a green-white table data
     * `white-green` - generates a white-green table data
     * `blue-white` - generates a blue-white table data
     * `white-blue` - generates a white-blue table data
     * `yellow-white` - generates a yellow-white table data
     * `white-yellow` - generates a white-yellow table data
     * `purple-white` - generates a purple-white table data
     * `white-purple` - generates a white-purple table data
     * `orange-white` - generates a orange-white table data
     * `white-orange` - generates a white-orange table data
     * `pink-white` - generates a pink-white table data
     * `white-pink` - generates a white-pink table data
     * `brown-white` - generates a brown-white table data
     * `white-brown` - generates a white-brown table data
     * `gray-white` - generates a gray-white table data
     * `white-gray` - generates a white-gray table data
### Example usage:
    
        <table>
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Username</td>
                </tr>
            </thead>
            <tbody>
                <ftdata count="3" stype="striped">
                   <ftmp colors="dark-white">
                      <tr>
                         <td>John</td>
                         <td>Doe</td>
                         <td>@johndoe</td>
                      </tr>
                  </ftmp>
                </ftdata>
            </tbody>
        </table>

#### Rendered Results
    
        <table>
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Username</td>
                </tr>
            </thead>
            <tbody>
                <tr style="background-color: #000000; color: #ffffff;">
                    <td>John</td>
                    <td>Doe</td>
                    <td>@johndoe</td>
                </tr>
                <tr style="background-color: #ffffff; color: #000000;">
                    <td>John</td>
                    <td>Doe</td>
                    <td>@johndoe</td>
                </tr>
                <tr style="background-color: #000000; color: #ffffff;">
                    <td>John</td>
                    <td>Doe</td>
                    <td>@johndoe</td>
                </tr>
            </tbody>
        </table>

### Other Example

        <table>
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Username</td>
                </tr>
            </thead>
            <tbody>
                <ftdata count="3" stype="bordered striped hover">
                   <ftmp colors="red-white">
                      <tr>
                         <td>John</td>
                         <td>Doe</td>
                         <td>@johndoe</td>
                      </tr>
                  </ftmp>
                </ftdata>
            </tbody>
        </table>

#### Rendered Results

        <table>
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Username</td>
                </tr>
            </thead>
            <tbody>
                <tr style="background-color: #ff0000; color: #ffffff;">
                    <td>John</td>
                    <td>Doe</td>
                    <td>@johndoe</td>
                </tr>
                <tr style="background-color: #ffffff; color: #ff0000;">
                    <td>John</td>
                    <td>Doe</td>
                    <td>@johndoe</td>
                </tr>
                <tr style="background-color: #ff0000; color: #ffffff;">
                    <td>John</td>
                    <td>Doe</td>
                    <td>@johndoe</td>
                </tr>
            </tbody>
        </table>

5- fsdata
---
---------

Generates a random or faked select data based on the number of options specified by the `count` attribute. and `type` attribute specifies the type of the select data to generate. for example if you want to generate a select data with a random options you can use `type="random"` and if you want to generate a foods select data you can use `type="foods"` and if you want to generate a countries select data you can use `type="countries"` and if you want to generate a cities select data you can use `type="cities"` and if you want to generate a states select data you can use `type="states"` and if you want to generate a colors select data you can use `type="colors"` etc.

### Attributes:
  *  `count` - specifies the number of options to generate.
  *  `type` - specifies the type of the select data to generate. It can be one of the following values:
     *  `random` - generates a random select data
     *  `foods` - generates a foods select data
     *  `countries` - generates a countries select data
     *  `cities` - generates a cities select data
     *  `states` - generates a states select data
     *  `colors` - generates a colors select data
     *  `animals` - generates a animals select data
     *  `fruits` - generates a fruits select data
     *  `vegetables` - generates a vegetables select data
     *  `drinks` - generates a drinks select data
     *  `sports` - generates a sports select data
     *  `cars` - generates a cars select data
     *  `clothes` - generates a clothes select data
     *  `tools` - generates a tools select data
     *  `electronics` - generates a electronics select data
     *  `musics` - generates a musics select data
     *  `movies` - generates a movies select data
     *  `books` - generates a books select data
     *  `games` - generates a games select data
     *  `websites` - generates a websites select data
     *  `companies` - generates a companies select data
     *  `brands` - generates a brands select data
     *  `people` - generates a people select data
     *  `jobs` - generates a jobs select data
     *  `languages` - generates a languages select data
     *  `currencies` - generates a currencies select data
     *  `religions` - generates a religions select data
     *  `countries-codes` - generates a countries-codes select data
     *  `cities-codes` - generates a cities-codes select data
     *  `states-codes` - generates a states-codes select data
     *  `jobs` - generates a jobs select data
     *  `colors` - generates a colors select data
     *  `animals` - generates a animals select data
    
### Example usage:
    
        <select>
            <option value="">Select</option>
            <fsdata count="3" type="foods">
            </fsdata>
        </select>

#### Rendered Results
        
        <select>
            <option value="">Select</option>
            <option value="Bread">Bread</option>
            <option value="Cheese">Cheese</option>
            <option value="Eggs">Eggs</option>
        </select>

### Other Example
    
        <select>
            <option value="">Select</option>
            <fsdata count="3" type="countries">
            </fsdata>
        </select>  

#### Rendered Results
            
        <select>
            <option value="">Select</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
        </select>
  
6- tmp
---
--------
this tag load html template from file defined in the `src` attribute and render it in the current position.

for example if you have a template file named `header.html` and you want to load it in your html file you can use the following code:

    <tmp src="header.html"></tmp>

### Attributes:
 *  `src` - specifies the path of the template file to load.

### Example usage:
        
        <tmp src="header.html"></tmp>   
### Rendered Results
        
        <div class="header">
            <h1>Header</h1>
        </div> 
        <!-- or the content of the header.html file -->

7- trans
---
--------
its part of translation system, it translate the text inside it to the current language.
its will get the text inside language code attribute and translate it to the current language.

### Attributes:
* `ar` - the text to translate to arabic language.
* `en` - the text to translate to english language.
* `fr` - the text to translate to french language.
* `de` - the text to translate to german language.
* `es` - the text to translate to spanish language.
* `it` - the text to translate to italian language.
* `pt` - the text to translate to portuguese language.
* `ru` - the text to translate to russian language.
* `tr` - the text to translate to turkish language.
* `zh` - the text to translate to chinese language.
* `ja` - the text to translate to japanese language.
* `ko` - the text to translate to korean language.
* `hi` - the text to translate to hindi language.
* `bn` - the text to translate to bengali language.
* `pa` - the text to translate to punjabi language.
* `ta` - the text to translate to tamil language.

### Example
    <trans ar="مرحبا بالعالم" en="Hello World" fr="Bonjour le monde" de="Hallo Welt" es="Hola Mundo" it="Ciao mondo" pt="Olá Mundo" ru="Привет мир" tr="Merhaba Dünya" zh="你好，世界" ja="こんにちは世界" ko="안녕 세상" hi="नमस्ते दुनिया" bn="ওহে বিশ্ব" pa="ਸਤ ਸ੍ਰੀ ਅਕਾਲ" ta="ஹலோ உலகம்">

### Rendered Results
    <span>مرحبا بالعالم</span>
    <!-- or -->
    <span>Hello World</span>
    <!-- or -->
    <span>Bonjour le monde</span>
    <!-- or -->
    <span>Hallo Welt</span>
    <!-- or -->
    <span>Hola Mundo</span>
    <!-- or -->
    <span>Ciao mondo</span>
    <!-- or -->
    <span>Olá Mundo</span>
    <!-- or -->
    <span>Привет мир</span>
    <!-- or -->
    <span>Merhaba Dünya</span>
    <!-- or -->
    <span>你好，世界</span>
    <!-- or -->
    <span>こんにちは世界</span>
    <!-- or -->
    <span>안녕 세상</span>
    <!-- or -->
    <span>नमस्ते दुनिया</span>
    <!-- or -->
    <span>ওহে বিশ্ব</span>
    <!-- or -->
    <span>ਸਤ ਸ੍ਰੀ ਅਕਾਲ</span>
    <!-- or -->
    <span>ஹலோ உலகம்</span>

8- transGroup
---
--------
its part of translation system, its the holder parent of translation buttons, and its will show the label of the current language.
and if you click on it, it will show the translation buttons ( `transGroupItem` ) .
that we will mention it later.

9- transGroupItem
---
--------
its part of translation system, its the translation button, its will change the current language to the language of the button.

### Attributes:
* `lang` - the language code of the button.
* `default` - if you want to set the default language, you can use this attribute and set it to `true`.

### Example
    <transGroup> 
        <transGroupItem lang="ar" default="true"></transGroupItem>
        <transGroupItem lang="en"></transGroupItem>
        <transGroupItem lang="fr"></transGroupItem>
        <transGroupItem lang="de"></transGroupItem>
        <transGroupItem lang="es"></transGroupItem>
        <transGroupItem lang="it"></transGroupItem>
        <transGroupItem lang="pt"></transGroupItem>
        <transGroupItem lang="ru"></transGroupItem>
        <transGroupItem lang="tr"></transGroupItem>
        <transGroupItem lang="zh"></transGroupItem>
        <transGroupItem lang="ja"></transGroupItem>
        <transGroupItem lang="ko"></transGroupItem>
    </transGroup>

    
