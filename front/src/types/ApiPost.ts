export interface ApiPost {
    post_id: number;
    descricao: string;
    imagem: string;
    created_at: string;
    updated_at: string;
    usuario: {
        usuario_id: number;
        nome: string;
        foto_perfil: string; 
    };
    local: {
        local_id: number;
        nome: string;
        endereco: string;
    };
    qtd_comentarios: number;
    qtd_curtidas: number;
}