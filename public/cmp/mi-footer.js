class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Gasca Salazar Héctor.`;
    }
}
customElements.define("mi-footer", MiFooter);