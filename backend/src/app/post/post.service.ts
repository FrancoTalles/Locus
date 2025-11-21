import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) { }

  async create(createPostDto: CreatePostDto) {
    const post = this.postRepository.create(createPostDto);
    return this.postRepository.save(post);
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async findOne(post_id: number): Promise<Post> {
    const post = await this.postRepository.findOne({ where: { post_id } });
    if (!post) {
      throw new NotFoundException(`Post com ID ${post_id} não encontrado.`);
    }
    return post;
  }

  async update(post_id: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(post_id);
    this.postRepository.merge(post, updatePostDto);
    return this.postRepository.save(post);
  }

  async remove(post_id: number): Promise<void> {
    const result = await this.postRepository.delete(post_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Post com ID ${post_id} não encontrado para exclusão.`);
    }
  }
}
