# Kid's Drums

Kid's Drums is a drum school for children aged 5-10 years. Since there are very few drum school who are specialized on this target audience there is a need to be addressed. The curriculum and teaching style is especially tailored to the learning style of kids that age. 5-10 years was chosen because in Germany it roughly spans the time of elementary school (including the last year of kindergarten) to which the learning system is most applicable.


![Website on different screen sizes](readmedocs/Mockup-screenshots.png "Mockup screenshot")


## User Stories

- As a visitor of this site I want to find and contact a drum teacher for my 6 year old child who just started elementary school.
- As a parent I want to quickly gather information about this drum school as well as get feel for it in order to find out whether or not it is a possible option for our child.
- As caring guardians we already looked into drum schools and I would like to know what exactly the differences to a more traditional drum schools are. Furthermore I'd like to easily compare pricing and location.

## Features
- Hompage
  - The Header
    - The user will immediately see the school's name.

  - Navigation
    - Below the header the user will find a navigation bar with links for "Home", "Pricing", "Location" and "Contact Us".
    - While "Home", "Pricing" and "Location" are section within the homepage, "Contact Us" opens another page. This is because the information on every page would be too sparse to justify rendering a new page.

  - The Banner Section
    - The Banner Section gives a clear, one sentence statement who the school is for.
    - It also provides a hero image to set the tone for the website.

  - The Why Section
    - With a simple bullet point list the Why Section states why this school is the right school for kids between the ages of 5 to 10.

    ![Homepage](readmedocs/Homepage.png "Homepage")


  - The Pricing Section
    - Here interested parents/guardians can find information about how much the different durations of the lessons will cost them per month.
    - Furthermore they are informed that the lessons will take place only outside the school holidays which averages in Germany to about three lessons per month.
    - To speed up the registration process users will also find a direct link to the contact us form and encourages them to take a trial lesson which is for free.

  - The Location Section
    - User will find the address of the school. (Since the school doesn't exist this address is fictitious.)

    ![Homepage-Pricing-Location-sections](readmedocs/Homepage-Pricing-Location-sections.png "Homepage with Pricing and Location sections")


  - The Quote
    - This is not a dedicated section. However, the user will find another hero image and a quote to further support the vibe of the site.

  - The Footer
    - In the footer the user will find all the social media icons which link to their respective social media plattform on which the school is active.

    ![Homepage-Quote-section-Footer](readmedocs/Homepage-Quote-section-Footer.png "Homepage Quote section and Footer")


- The Contact Us Page
  - The Contact Us Page presents the user with a form to provide all necessary information to the school
  - Everything but the phone number are required.
  - The "Submit"-button text is altered to "Count me in!" for it's abiguous meaning: "Count me in!" as in "I'm in" but also "Count me in" like when counting someone in before playing a song. This fit nicely with the musical nature of a drum school.
  - This is further emphasized by the hero image of a drummer counting in.
  - Submitting the data will send the user to the Confirmation Page.

  ![Contact-Us-page](readmedocs/Contact-Us-page.png "Contact Us page")


- The Confirmation Page
  - On the Confirmation Page displays a short "Thank you!"-note as well as a confirmation that the data has been received and that someone will get it touch with the user soon.

  ![Confirmation-page](readmedocs/Confirmation-page.png "Confirmation page")


## Future Features

- In order to make locating the school more frictionless it would be advantageous to add a google maps widget to the Location section.
- To inform users/parents/guardians of the school's activities an "Events" page would be helpful. By showing the school's work in the form of concerts and the like it will enhance the school's visibility in the public and thus driving further client aquistion.
- A dedicated area for enrolled students which is accessible via a dedicated sign in page/window where students and their parents/guardians will find lesson dates, homework info and the scores/exercises from the lessons will make it easier for the parents/guardians to see the progress their kids make and help the kids out in case they lose some music sheets.
- The quote could change everytime one visits the site by being drawn randomly from a pool of "musical" quotes.

## Typography and Colour Schemes

### Typography
- The used fonts are Merriweather and Raleway since they are a bit playful (tiny serifs) to better convey the site's message of being a drum school for kids.
- However, since it is still adults who will visit the site searching for a drum teacher/school for their children the fonts are not carrying it too far with the embellishments.

### Colour Schemes
- The dominant colours are #f5f5f5 (also known as whitesmoke) and a shade of beige/yellow (#fce787). They were chosen because they resemble the colour of a coated drumhead and the wood of a pair of sticks.
- Luckily on the site pexels.com images of a drum kit with a similar beige colour were found which were then used as the title image, as visual dividers for the sections on the homepage as well as on the Confirmation page.
- The hero images at the top and bottom of the homepage and on the Contact Us page were chosen firstly because they show kids playing drums and having a lot of fun doing so. And secondly because the background was white-ish which works nicely with the colour of navigation bar and footer (the already mentioned whitesmoke or #f5f5f5).

## Wireframes

![Wireframe for homepage for mobile and desktop](readmedocs/Wireframes-1.jpeg "Wireframes 1")

![Wireframe for contact us page for mobile and desktop](readmedocs/Wireframes-2.jpeg "Wireframes 2")

## Technology

- Gitpod was used for writing and editing the code.
- GitHub is used for storing the code.
- Font Awesome was used to provide the icon for all social plattforms.
- favicon.io was used to turn a png-graphic into usable code to paste into the head element in order to get a favicon.
- Google Fonts provides the Merriweather and Raleway fonts which were used an all pages of this site.

## Testing

### Code Validation

The W3C Markup Validator and W3C CSS Validator Services were used to check the code of all HTML and CSS files. No errors were found.

Results:

- index.html
  https://validator.w3.org/nu/?doc=https%3A%2F%2Fmarkus-hefner.github.io%2FPortfolio-Project-1%2F

- contact-us.html
  https://validator.w3.org/nu/?doc=https%3A%2F%2Fmarkus-hefner.github.io%2FPortfolio-Project-1%2Fcontact-us.html

- confirmation.html
  https://validator.w3.org/nu/?doc=https%3A%2F%2Fmarkus-hefner.github.io%2FPortfolio-Project-1%2Fconfimation.html%3Fchilds-first-name%3Dasdf%26childs-last-name%3Dasdf%26childs-age%3D5%26guardians-first-name%3Dasdf%26guardians-last-name%3Dasdf%26email%3Dasdf%2540asdf%26phone%3D

- CSS
  https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmarkus-hefner.github.io%2FPortfolio-Project-1%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=de

### Assessibility

- Lighthouse report for mobile:
  ![lighthouse-report-mobile](readmedocs/lighthouse-report-mobile-final.png "Lighthouse report for mobile")

- Lighthouse report for desktop:
  ![lighthouse-report-desktop](readmedocs/lighthouse-report-desktop-final.png "Lighthouse report for desktop")

### User Stories - Test Cases
  - As a visitor of this site I want to find and contact a drum teacher for my 6 year old child who just started elementary school.
    - Because of the simple layout of the site the user will find the Contact Us link right away in the very easily readable navigation bar.
    ![Homepage](readmedocs/Homepage.png "Homepage")
    - After clicking on it the user will be re-directed to the site's "contact-us"-form.
    ![Contact-Us-page](readmedocs/Contact-Us-page.png "Contact Us page")
    - Here the user can fill out the form whereby it won't be send and the user will be notified in case anything is missing but the phone number (which is optional).
    ![Contact-Us-page-missing-data](readmedocs/Contact-Us-page-missing-data.png "Contact Us page missing data")
    - After submitting the form by clicking on the "Count Me In!"-button the user will be re-directed to a confirmation page. From here they can go to homepage, the pricing section, the location section or contact school again via the links in the navigation bar.
    ![Confirmation-page](readmedocs/Confirmation-page.png "Confirmation page")

  - As a parent I want to quickly gather information about this drum school as well as get feel for it in order to find out whether or not it is a possible option for our child.
    - As a first time visitor the user will be greeted with a welcoming and warm homepage. The colour schemes are inviting and coherent and the hero image immediately establishes a feeling that this site is all about drumming and the enjoyment of it. In the navigation bar the user will find links to the different sections and pages.
    ![Homepage](readmedocs/Homepage.png "Homepage")
    - To see the section the user can also just scroll down in order to get a better overall impression of the site and thus a better feeling for the school.
    ![Homepage-Pricing-Location-sections](readmedocs/Homepage-Pricing-Location-sections.png "Homepage with Pricing and Location sections")
    - The information is structured a sensible manner. Furthermore at the end of page the user will see another hero image emphasizing again the school's playful approach to playing drums as well as an inspiring quote emphasizing the love for music.
    ![Homepage-Quote-section-Footer](readmedocs/Homepage-Quote-section-Footer.png "Homepage Quote section and Footer")
    - For further information the user will find in the footer all social links which open in a new tab.

  - As caring guardians we already looked into drum schools and I would like to know what exactly the differences to a more traditional drum schools are. Furthermore I'd like to easily compare pricing and location.
    - Upon entering the homepage the users can quickly and easily find the most relevant information either by clicking on the corresponding links in the navigation bar or by scrolling down. This information is all contained as sections on the homepage for fast accessibility instead of opening a new HTML-file for each.
    ![Free-Trial-button-hovered](readmedocs/Free-Trial-button-hovered.png "Free Trial button hovered")
    In the Pricing section the users also learn via a button text that there is a free trial lesson. By clicking on the button the users are directly forwarded to the Contact Us form.
    I![Contact-Us-page](readmedocs/Contact-Us-page.png "Contact Us page")
    - Since the title and navigation bar remain at the top of the screen at all times the users are able to move quickly on the site.

### Bugs
- FIXED: At the beginning the background images were implemented as normal images within the HTML file which led to distorted pictures. However, the problem was fixed after the images were loaded as background in the CSS file.
- NOT FIXED: I was unable to get the input field of the form element to get to max-width of 20rem while also being aligned center by the parent container. They are now at their default width which looks a bit odd espacially on larger screen sizes.

### Supported Screens and Browsers
  - The Website was tested with Firefox and Google Chrome.
  - It was viewed stretched from a width of 280px up to a width of 2300px.

## Deployment

### GitHub

- Log into GitHub account.
- Choose from the correct repository on the left-hand side.
- In the navigation bar at top of the screen click on "Settings". (Attention: not the "Settings" in the drop-down menu in upper right-hand corner.)
- Under "Code and automation" click on "Pages".
- From the drop-down menu under "Source" choose "Deploy from a branch"
- From the first drop-down menu under "Branch" choose your main branch (usually it is called "Master Branch" or just "main").
- From the second drop-down menu under "Branch" choose "/ (root)".
- Click "Save".
- In the navigation bar at top of the screen click on "Code".
- On the right-hand sidebar of the "Code"-page find a section called "Deployments" and click on "github-pages".
- You will find a box labelled "Latest deployments" as well as a list of all deployments so far. Open the website by clicking on the link in the "Latest deployments"-box.

## Credits

- All images on the site are free images from pexels.com.
- The png-graphic that was used to create the favicon was from the website clipartmax.com.
- I used the Asterisk wildcard selector, its properties as well as its comment from the "Love Running" Walktrough Project.
- I also used the basic comments from the "Love Running" Walktrough Project to structure my project in the beginning but edited them and added some more as necessary as I progressed.

All other content was written by the developer.