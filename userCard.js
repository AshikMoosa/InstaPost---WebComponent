const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
<link rel="stylesheet" href="userCard.css" />

<div class="card">
    <div class="card-header">
        <img class="avatar" />
        <div class="header-info">
            <h4><slot name="username" /></h4>
            <p><slot name="followers" /></p>
        </div>
        <button><slot name="buttontxt" /></button>
    </div>

    <div class="card-content">
        <img alt="card-cover" class="card-cover"/>
        <div class="content-cta">
            <div class="left-cta">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
            <div class="right-cta">
                <i class="fa-regular fa-bookmark"></i>
            </div>
        </div>
    </div>

    <div class="card-body">
        <h4 class="likes"><slot name="likes" /></h4>
        <h4 class="body-heading"><slot name="body-heading" /></h4>
        <p class="posted-date"><slot name="posted-date" /></p>
        <p class="view-comment"><slot name="view-comment" /></p>
    </div>

    <div class="card-footer">
        <input type="text" name="comment" placeholder="Add a comment..." />
        <i class="fa-brands fa-instagram"></i>
    </div>
</div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector(".avatar").src = this.getAttribute("avatar");
    this.shadowRoot.querySelector(".card-cover").src =
      this.getAttribute("card-cover");
  }
}

window.customElements.define("user-card", UserCard);
