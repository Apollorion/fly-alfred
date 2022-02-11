<p align="center">
   <img src="https://github.com/Apollorion/fly-alfred/blob/master/icon.png?raw=true">
</p>
<p align="center">FLY - Fast bookmarks in an Alfred workflow.</p>
<p align="center">http://fly.apollorion.com/</p>

# Deprecated
I am no longer maintaining this extension. For a better experience that is still maintained checkout: https://github.com/apollorion/fly

# Installation

1. Right click [here](https://github.com/Apollorion/fly/raw/master/Fly.alfredworkflow) and save to desktop.
2. Double click `Fly.alfredworkflow` on your desktop to add to alfred.
3. Enjoy!


# Usage

Fly will search your google chrome bookmarks based on your bookmarks bar directory tree.

### Fly
Usage: `fly {search}`
Fly to a website.

Say for example this is your google chrome bookmark bar:
```
dev/
  - important/
     - github -> github.com
  - stackoverflow -> stackoverflow.com
personal/
  - apollorion -> apollorion.com
npm -> npmjs.com
```

When you do `fly dev` you will see:
<img src="https://github.com/Apollorion/fly/blob/master/search1.png?raw=true">

When you do `fly github` or `fly dev/important github` you will see:
<img src="https://github.com/Apollorion/fly/blob/master/search2.png?raw=true">

When you do `fly npm` you will see:
<img src="https://github.com/Apollorion/fly/blob/master/search3.png?raw=true">
