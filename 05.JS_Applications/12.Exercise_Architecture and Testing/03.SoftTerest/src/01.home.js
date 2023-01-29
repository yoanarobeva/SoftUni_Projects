const section = document.getElementById('homePage');
section.remove();

let ctx = null;

export function showHomeView(inCtx) {
    ctx = inCtx;
    ctx.render(section);
}