# Interactive Image Gallery Applying jQuery
>[!NOTE]
># Overview
> Welcome to the Image Gallery project!
>This simple web page allows users to browse through a collection of thumbnail images and view a larger version of the selected image.
>
>The gallery supports two transition effects:
>
>- fade and slide, giving users the option to toggle between them.
>
>> Additionally, there's a button to clear all displayed images.

## Functionality:
Thumbnail Navigation: Clicking on a thumbnail image displays the larger version in the main area.
Transition Toggle: Users can switch between fade and slide transitions for a dynamic viewing experience.
Clear All Images: Removes all displayed images, returning the page to its initial state.

## Technical Details:
> ### HTML Structure
- The main container (#gallery-container) holds a list of thumbnail images (ul) and a larger display image (#display-image).
- Thumbnails are organized within an unordered list (ul) and include buttons for transition toggling and clearing images.
> ### CSS Styling
Styles ensure a visually appealing layout, with a responsive design that adapts to different screen sizes.
- Thumbnails, buttons, and the display image are styled for consistency and a modern look.
- Media queries are used to adjust the layout for smaller screens, ensuring a user-friendly experience on mobile devices.
> ### JavaScript/jQuery
- Event listeners are employed to handle user interactions, such as thumbnail clicks and transition toggling.
- Functions like fadeTransition and slideTransition manage the display of images with corresponding transition effects.
- Callbacks are utilized for alerting the user about transition changes.
- jQuery simplifies DOM manipulation and event handling.

>[!IMPORTANT]
> ## How to Use:
>1. Open the HTML file in a web browser.
>2. Click on a thumbnail to view the larger image.
>3. Use the transition toggle button to switch between fade and slide effects.
>4. Clear all images with the provided button.

