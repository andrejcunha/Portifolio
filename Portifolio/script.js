// Função para abrir o modal e exibir a imagem ampliada
function openModal(img) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex"; // Exibe o modal
    modalImg.src = img.src; // Define a imagem do modal
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Oculta o modal
}
