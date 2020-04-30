<p align="center">
   <img src="https://github.com/Apollorion/fly/blob/master/icon.png?raw=true">
</p>
<p align="center">FLY - Fast bookmarks in an Alfred workflow.</p>
<p align="center">http://fly.apollorion.com/</p>

# Installation

1. Right click [here](https://github.com/Apollorion/fly/raw/master/Fly.alfredworkflow) and save to desktop.
2. Double click `Fly.alfredworkflow` on your desktop to add to alfred.
3. Enjoy!


# Usage

Fly has a concept of a `site`, a `subtext` and `url`. First it will search for your `site` and narrow down the results based on a `subtext`.

### Fly
Usage: `fly {search}`
Fly to a website.

When searching, you can search for a site OR subtext. For instance, say you have the following saved in your fly history:
```
# site 1
site: github
sub: fly
url: https://github.com/apollorion/fly

# site 2
site: github
sub: npm
url: https://github.com/npm/cli
```

When you do `fly github` you will see:
<img src="https://github.com/Apollorion/fly/blob/master/search1.png?raw=true">

When you do `fly npm` or `fly github npm` you will see:
<img src="https://github.com/Apollorion/fly/blob/master/search2.png?raw=true">

### Fly-Add
Usage: `fly-add {site} {sub} {url}`
Add websites to fly to later.

Example: `fly-add github fly https://github.com/apollorion/fly`
<img src="https://github.com/Apollorion/fly/blob/master/add.png?raw=true">

### Fly-Delete
Usage: `fly-delete {search}`
Delete websites you no longer wish to fly to.

Example: `fly-delete github npm`
<img src="https://github.com/Apollorion/fly/blob/master/delete.png?raw=true">