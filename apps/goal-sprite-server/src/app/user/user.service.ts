import { Injectable } from '@nestjs/common';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    this.supabase = createClient(
      this.configService.get<string>('SUPABASE_URL'),
      this.configService.get<string>('SUPABASE_ANON_KEY')
    );
  }

  async createUser(name: string, email: string, password: string) {
    const { data, error } = await this.supabase
      .from('users')
      .insert([{ name, email, password }]);

    if (error) throw new Error(error.message);

    return data;
  }

  async getUser(email: string, password: string) {
    const { data, error } = await this.supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .eq('password', password);

    if (error) throw new Error(error.message);

    return data;
  }

  async getAllUsers() {
    const { data, error } = await this.supabase.from('users').select();

    if (error) throw new Error(error.message);

    return data;
  }
}
