// src/pages/Feed.tsx

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge"; // Componente novo
import { Skeleton } from "@/components/ui/skeleton"; // Componente novo (instale: npx shadcn-ui@latest add skeleton)
import { MessageCircle, Heart, MapPin, Plus, ImageOff } from "lucide-react";
import type { ApiPost } from "../types/ApiPost";

const API_URL = "http://localhost:3000/post";

const getInitials = (name: string) =>
  name?.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase();

const formatarData = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  const now = new Date();
  const diffMinutes = Math.floor((now.getTime() - date.getTime()) / 60000);
  const diffHours = Math.floor(diffMinutes / 60);

  if (diffMinutes < 1) return "agora";
  if (diffMinutes < 60) return `${diffMinutes}m`;
  if (diffHours < 24) return `${diffHours}h`;
  return date.toLocaleDateString("pt-BR", { day: "numeric", month: "short" });
};

const FeedSkeleton = () => (
  <div className="flex gap-4 p-4 border-b border-border">
    <Skeleton className="h-10 w-10 rounded-full" />
    <div className="space-y-2 flex-1">
      <div className="flex justify-between">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[50px]" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[80%]" />
      <Skeleton className="h-40 w-full rounded-xl mt-2" />
    </div>
  </div>
);

function Feed() {
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Falha na requisição");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch(() => setError("Não foi possível atualizar o feed."))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-background flex justify-center w-full">
      {/* Container Principal: Responsivo (w-full no mobile, max-w-2xl no desktop) */}
      <section className="w-full md:max-w-2xl md:border-x border-border min-h-screen pb-24">
        
        {/* Cabeçalho Sticky com Blur */}
        <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-foreground">Início</h1>
          {/* Opcional: Logo ou ícone de notificação aqui */}
        </header>

        {/* Estado de Erro */}
        {error && (
          <div className="m-4 p-4 rounded-lg bg-destructive/10 text-destructive text-sm font-medium text-center">
            {error}
          </div>
        )}

        {/* Estado de Loading (Skeletons) */}
        {isLoading && (
          <div className="animate-pulse">
            {[1, 2, 3].map((i) => <FeedSkeleton key={i} />)}
          </div>
        )}

        {/* Lista Vazia */}
        {!isLoading && !error && posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <ImageOff className="h-12 w-12 mb-4 opacity-20" />
            <p>Nenhuma publicação encontrada.</p>
          </div>
        )}

        {/* Lista de Posts */}
        <div className="flex flex-col">
          {posts.map((post) => (
            <article
              key={post.post_id}
              className="group flex gap-3 p-4 border-b border-border transition-all hover:bg-muted/30 cursor-pointer"
              onClick={() => console.log(`Navegar para post ${post.post_id}`)}
            >
              {/* Avatar (Lado Esquerdo) */}
              <div className="flex-shrink-0 pt-1">
                <Avatar className="h-10 w-10 ring-2 ring-transparent group-hover:ring-border transition-all">
                  <AvatarImage src={post.usuario?.foto_perfil} alt={post.usuario?.nome} className="object-cover" />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {getInitials(post.usuario?.nome || "?")}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Conteúdo (Lado Direito) */}
              <div className="flex-1 min-w-0">
                {/* Linha de Metadados */}
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="font-bold text-sm text-foreground truncate">
                      {post.usuario?.nome || "Anônimo"}
                    </span>
                    
                    {post.local && (
                      <Badge variant="secondary" className="h-5 px-1.5 text-[10px] font-normal text-muted-foreground flex items-center gap-1 bg-muted/50 hover:bg-muted">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate max-w-[100px]">{post.local.nome}</span>
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {formatarData(post.created_at)}
                  </span>
                </div>

                {/* Texto do Post */}
                <p className="text-sm sm:text-[15px] leading-relaxed text-foreground/90 whitespace-pre-wrap break-words mb-3">
                  {post.descricao}
                </p>

                {/* Imagem (Se houver) */}
                {post.imagem && (
                  <div className="relative rounded-xl overflow-hidden border border-border/50 bg-muted mb-3 group-hover:shadow-sm transition-all">
                    <img
                      src={post.imagem}
                      alt="Anexo"
                      className="w-full h-auto max-h-[500px] object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Barra de Ações (Usando Shadcn Buttons) */}
                <div className="flex items-center justify-between -ml-2 max-w-sm">
                  {/* Botão Comentários */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 gap-1.5 h-8 px-2 rounded-full"
                    onClick={(e) => { e.stopPropagation(); /* Lógica de curtir */ }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs">{post.qtd_comentarios || 0}</span>
                  </Button>

                  {/* Botão Curtidas */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-muted-foreground hover:text-pink-600 hover:bg-pink-600/10 gap-1.5 h-8 px-2 rounded-full"
                    onClick={(e) => { e.stopPropagation(); /* Lógica de curtir */ }}
                  >
                    <Heart className="w-4 h-4" />
                    <span className="text-xs">{post.qtd_curtidas || 0}</span>
                  </Button>

                   {/* Botão Compartilhar / Opções (Placeholder) */}
                   <div className="flex-1"></div> {/* Espaçador */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAB (Floating Action Button) - Responsivo */}
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 z-50 transition-transform active:scale-95 flex items-center justify-center"
        onClick={() => console.log("Novo Post")}
      >
        <Plus className="h-6 w-6" />
      </Button>
    </main>
  );
}

export default Feed;