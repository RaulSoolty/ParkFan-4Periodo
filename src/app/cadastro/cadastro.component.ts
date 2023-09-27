import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  sobrenome: string = '';
  email: string = '';
  matricula: string = '';
  celular: string = '';

  // Campos de endereço
  rua: string = '';
  cidade: string = '';
  estado: string = '';
  codigoPostal: string = '';

  get formValid(): boolean {
    // Valide todos os campos aqui
    return (
      this.isNomeValid() &&
      this.isSobrenomeValid() &&
      this.isEmailValid() &&
      this.isMatriculaValid() &&
      this.isCelularValid() &&
      this.isRuaValid() &&
      this.isCidadeValid() &&
      this.isEstadoValid() &&
      this.isCodigoPostalValid()
    );
  }

  submitForm() {
    if (!this.formValid) {
      // Não envie o formulário se ele não for válido
      console.log('Formulário inválido');
      return;
    }

    // O formulário é válido, você pode enviar os dados ou fazer o que for necessário.
    console.log('Dados do formulário enviados:');
    console.log('Nome:', this.nome);
    console.log('Sobrenome:', this.sobrenome);
    console.log('Email:', this.email);
    console.log('Número de Matrícula:', this.matricula);
    console.log('Celular:', this.celular);
    console.log('Rua:', this.rua);
    console.log('Cidade:', this.cidade);
    console.log('Estado:', this.estado);
    console.log('Código Postal:', this.codigoPostal);
  }

  // Funções de validação para cada campo
  isNomeValid(): boolean {
    return this.nome.trim() !== '';
  }

  isSobrenomeValid(): boolean {
    return this.sobrenome.trim() !== '';
  }

  isEmailValid(): boolean {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.email);
  }

  isMatriculaValid(): boolean {
    return /^\d{11}$/.test(this.matricula);
  }

  isCelularValid(): boolean {
    // Verifica se o número de celular está em um dos formatos válidos
    return (
      /^\(\d{2}\)\d{8}$/.test(this.celular) ||      // (XX)XXXXXXXX
      /^\(\d{2}\)\s\d{8}$/.test(this.celular) ||    // (XX) XXXXXXXX
      /^\(\d{2}\)\s\d{5}\s\d{3}$/.test(this.celular) || // (XX) XXXXX XXX
      /^\(\d{2}\)\s\d{5}-\d{4}$/.test(this.celular) || // (XX) XXXXX-XXXX
      /^\(\d{2}\)\d{5}-\d{4}$/.test(this.celular) ||  // (XX)XXXXX-XXXX
      /^\d{2}\s\d{1}\s\d{4}-\d{4}$/.test(this.celular) || // XX X XXXX-XXXX
      /^\d{8}$/.test(this.celular) ||                // XXXXXXXX
      /^\d{2}\s\d{4}\s\d{4}$/.test(this.celular)     // XX X XXXX XXXX
    );
  }
  isRuaValid(): boolean {
    return this.rua.trim() !== '';
  }

  isCidadeValid(): boolean {
    return this.cidade.trim() !== '';
  }

  isEstadoValid(): boolean {
    return this.estado.trim() !== '';
  }

  isCodigoPostalValid(): boolean {
    // Verifica se o código postal está no formato "XXXXX-XXX" ou "XXXXXXXX"
    return /^\d{5}-\d{3}$/.test(this.codigoPostal) || /^\d{8}$/.test(this.codigoPostal);
  }
  
}
