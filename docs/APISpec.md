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
