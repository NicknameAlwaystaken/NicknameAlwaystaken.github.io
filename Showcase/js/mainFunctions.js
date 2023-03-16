var counter;
var myMarkdown;

const app = document.getElementById('markdown')
const run = async () => {
  app.src = 'MARKDOWN.md'
  await app.render({
    // The class `line-numbers` will be added to the markdown-body container
    classes: 'line-numbers',
    // These are Marked options
    gfm: false,
    mangle: false
  })
  alert('Render complete!')
}
run()

async function render(opts = {}) {
  // Ensure everything is initialised
  await this.waitForReady()
  const stamped = {}
  // Start generating the CSS and Markdown HTML strings
  const pending = this.buildMd(opts)
  const css = this.buildStyles()
  // Stamp styles if none exists; replace if there're changes
  if (css !== this.cache.styles) {
    this.cache.styles = css
    // Ensure that external stylesheets are loaded, then queue next repaint to prevent FOUC
    await this.stampStyles(css)
    stamped.styles = true
    await this.tick()
  }
  // Then stamp body if none exists; replace if there're changes
  const md = await pending
  if (md !== this.cache.body) {
    this.cache.body = md
    const node = this.stampBody(md)
    stamped.body = true
    // Begin asynchronous Prism highlight
    await this.highlight(node)
  }
  // Finally, fire the rendered event
  this.fire('zero-md-rendered', { stamped })
}

function setup() {
  navbar = document.getElementById("navbar");
  sticky = navbar.offsetTop;
  myMarkdown = document.getElementById("markdown");
  counter = 0;
}
function homePage() {
  window.location.href = "https://nicknamealwaystaken.github.io";
}
function practicePage() {
  window.location.href = "https://nicknamealwaystaken.github.io/PracticePage";
}
function showcasePage() {
  window.location.href = "https://nicknamealwaystaken.github.io/Showcase";
}
function changeMarkdown() {
  if(counter % 2 == 0) {
    myMarkdown.src = "README.md";
  }
  else {
    myMarkdown.src = "MARKDOWN.md";
  }
  counter++;
}