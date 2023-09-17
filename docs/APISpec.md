# APISpec

## Usage

All requests for a card are made to `/api/testaustime` and parameters are passed as query strings.

## Endpoints
The API provides 17 routes:
<details>
    <summary>Expand</summary>

- [username](#username)
- [theme](#theme)
- [langs_count](#langs_count)
- [layout](#layout)
- [title_color](#coloring)
- [bg_color](#coloring)
- [text_color](#coloring)
- [icon_color](#coloring)
- [border_radius](#border_radius)
- [border_color](#coloring)
- [locale](#locale)
- [hide_title](#hide_title)
- [hide_border](#hide_border)
- [hide](#hide)
- [line_height](#line_height)
- [hide_progress](#hide_progress)
- [custom_title](#custom_title)
- [api_domain](#api_domain)
- [cache_seconds](#cache_seconds)

</details>

### username <a name="username"></a>
Used to set the testaustime username

**Example:**

    https://example.com/api/testaustime?username=Testauskoira


### theme <a name="theme"></a>
Used to specify which [theme](Themes.md) to use

**Example:**

    https://example.com/api/testaustime?username=Testauskoira&theme=dark

### langs_count <a name="langs_count"></a>
Used to specify how many languages to display

**Example:**

    https://example.com/api/testaustime?username=Testauskoira&langs_count=10

### layout <a name="layout"></a>
Used to specify the card layout, defaults to normal.

**values:**
|compact|normal|
|---|---|

**Example:**

    https://example.com/api/testaustime?username=Testauskoira&layout=compact

### border_radius <a name="border_radius"></a>
Used to specify the border radius in pixels.

**Example:**

    https://example.com/api/testaustime?username=Testauskoira&border_radius=10

### locale <a name="locale"></a>
Used to set the card title language, defaults to english.

**values:**
|finnish|english|
|---|---|
|fi|en|

**Example:**

    https://example.com/api/testaustime?username=Testauskoira&locale=fi

### hide_title <a name="hide_title"></a>
Used to set the visibility of the title

**values:**
|true|false|
|---|---|

**Example:**

    https://example.com/api/testaustime?username=Testauskoira&hide_title=true

### hide_border <a name="hide_border"></a>
Used to set the visibility of the border around the card.

**values:**
|true|false|
|---|---|

**Example:**

    https://example.com/api/testaustime?username=Testauskoira&hide_border=true

### hide <a name="hide"></a>
Used to hide one or more languages from the card. Can take one or more values separated by a comma.

**Example:**

Hiding one language:

    https://example.com/api/testaustime?username=Testauskoira&hide=CSS

Hiding multiple languages:

    https://example.com/api/testaustime?username=Testauskoira&hide=CSS,Python

### line_height <a name="line_height"></a>
Used to set the spacing between elements on the card in pixels, does not change the font size.
This value is ignored in compact layout

**Example:**

    https://example.com/api/testaustime?username=Testauskoira&line_height=15

### hide_progress <a name="hide_progress"></a>
Used to set the visibility of the language progress bar.

**values:**

|true|false|
|---|---|

### custom_title <a name="custom_title"></a>
Used to set the title text, defaults to "Testaustime Stats" in english and "Testaustime tilastot" in finnish. Remember to encode special characters like spaces as shown below.

**Example:**

    https://example.com/api/testaustime?username=Testauskoira&custom_title=Hello%20World


### coloring <a name="coloring"></a>
Due to all of them using the same syntax, this part covers the following functions:

    title_color
    bg_color
    text_color
    icon_color
    border_color

Used to set the color of the respective element in hex format. These values will override the current theme if one is specified.

**Example:**

    https://example.com/api/testaustime?username=Testauskoira&title_color=32a852&bg_color=3b79db

Overriding theme colors:

    https://example.com/api/testaustime?username=Testauskoira&theme=dark&border_color=397a37

### api_domain <a name="api_domain"></a>
Used to specify the domain for the Testaustime server from which to fetch data. Defaults to `api.testaustime.fi`.

**Example:**

    https://example.com/api/testaustime?username=Testauskoira&api_domain=api.example.com

### cache_seconds <a name="cache_seconds"></a>
Used to set the duration for which the card will be cached in seconds. Defaults to 4 hours. This value will be clamped between 4 hours and one day.

**Example:**

Caching the card for 6 hours:

    https://example.com/api/testaustime?username=Testauskoira&cache_seconds=21600
Caching the card for less than 4 hours will result in the card getting cached for 4 hours:

    https://example.com/api/testaustime?username=Testauskoira&cache_seconds=7600
Caching the card for more than one day will result in the card getting cached for 1 day:

    https://example.com/api/testaustime?username=Testauskoira&cache_seconds=90000
    
