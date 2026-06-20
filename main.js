const { createApp } = Vue;
createApp({
    data() {
        return {
            contador: 0,
            menuAberto: false,
    // ↓ cole aqui os dados do cenário escolhido
    // (exemplo do cenário B:)
            form: { nome: '', turma: '' },
            inscritos: []
        };
    },
    methods: {
    // ↓ cole aqui os métodos do cenário escolhido
        adicionarInscrito() {
            if (!this.form.nome || !this.form.turma) return;
            this.inscritos.push({ nome: this.form.nome, turma: this.form.turma });
            this.form.nome = '';
            this.form.turma = '';
        },
        removerInscrito(idx) {
            this.inscritos.splice(idx, 1);
        }
    }
}).mount('#app');
