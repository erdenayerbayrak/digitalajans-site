export class FormValidator {
  private form: HTMLFormElement;
  private fields: Map<string, HTMLInputElement | HTMLTextAreaElement> = new Map();
  private rules: Map<string, ValidationRule[]> = new Map();

  constructor(formSelector: string) {
    this.form = document.querySelector(formSelector) as HTMLFormElement;
    if (!this.form) return;
    
    this.init();
  }

  private init(): void {
    this.setupFields();
    this.bindEvents();
    this.enhanceFormAppearance();
  }

  private setupFields(): void {
    const inputs = this.form.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const element = input as HTMLInputElement | HTMLTextAreaElement;
      this.fields.set(element.name, element);
      this.setupFieldValidation(element);
    });
  }

  private setupFieldValidation(field: HTMLInputElement | HTMLTextAreaElement): void {
    const rules: ValidationRule[] = [];
    
    // Required validation
    if (field.hasAttribute('required')) {
      rules.push({
        type: 'required',
        message: this.getFieldLabel(field) + ' is required'
      });
    }

    // Email validation
    if (field.type === 'email') {
      rules.push({
        type: 'email',
        message: 'Please enter a valid email address'
      });
    }

    // Phone validation
    if (field.type === 'tel') {
      rules.push({
        type: 'phone',
        message: 'Please enter a valid phone number'
      });
    }

    // Min length validation
    const minLength = field.getAttribute('minlength');
    if (minLength) {
      rules.push({
        type: 'minLength',
        value: parseInt(minLength),
        message: `Minimum ${minLength} characters required`
      });
    }

    this.rules.set(field.name, rules);
  }

  private bindEvents(): void {
    // Real-time validation
    this.fields.forEach((field) => {
      field.addEventListener('blur', () => this.validateField(field));
      field.addEventListener('input', () => this.clearFieldError(field));
    });

    // Form submission
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  private validateField(field: HTMLInputElement | HTMLTextAreaElement): boolean {
    const rules = this.rules.get(field.name) || [];
    
    for (const rule of rules) {
      if (!this.checkRule(field.value, rule)) {
        this.showFieldError(field, rule.message);
        return false;
      }
    }
    
    this.showFieldSuccess(field);
    return true;
  }

  private checkRule(value: string, rule: ValidationRule): boolean {
    switch (rule.type) {
      case 'required':
        return value.trim() !== '';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case 'phone':
        return /^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/\s/g, ''));
      case 'minLength':
        return value.length >= (rule.value || 0);
      default:
        return true;
    }
  }

  private showFieldError(field: HTMLInputElement | HTMLTextAreaElement, message: string): void {
    const container = field.closest('.form-group');
    if (!container) return;

    // Remove existing error
    this.clearFieldError(field);

    // Add error class
    container.classList.add('has-error');
    field.classList.add('error');

    // Create error message
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.innerHTML = `
      <i class="fas fa-exclamation-circle"></i>
      <span>${message}</span>
    `;

    container.appendChild(errorElement);

    // Animate in
    setTimeout(() => errorElement.classList.add('show'), 10);
  }

  private showFieldSuccess(field: HTMLInputElement | HTMLTextAreaElement): void {
    const container = field.closest('.form-group');
    if (!container) return;

    this.clearFieldError(field);
    container.classList.add('has-success');
    field.classList.add('success');

    // Add success icon
    const successIcon = document.createElement('div');
    successIcon.className = 'field-success-icon';
    successIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
    container.appendChild(successIcon);
  }

  private clearFieldError(field: HTMLInputElement | HTMLTextAreaElement): void {
    const container = field.closest('.form-group');
    if (!container) return;

    container.classList.remove('has-error', 'has-success');
    field.classList.remove('error', 'success');

    const errorElement = container.querySelector('.field-error');
    const successIcon = container.querySelector('.field-success-icon');
    
    if (errorElement) errorElement.remove();
    if (successIcon) successIcon.remove();
  }

  private getFieldLabel(field: HTMLInputElement | HTMLTextAreaElement): string {
    const label = this.form.querySelector(`label[for="${field.id}"]`);
    return label?.textContent || field.placeholder || field.name;
  }

  private enhanceFormAppearance(): void {
    // Add floating labels
    this.fields.forEach((field) => {
      const container = field.closest('.form-group');
      if (!container || container.querySelector('.floating-label')) return;

      const label = this.getFieldLabel(field);
      const floatingLabel = document.createElement('label');
      floatingLabel.className = 'floating-label';
      floatingLabel.textContent = label;
      floatingLabel.setAttribute('for', field.id);

      container.classList.add('floating-label-group');
      container.insertBefore(floatingLabel, field);

      // Handle focus states
      const updateFloatingLabel = () => {
        if (field.value || field === document.activeElement) {
          container.classList.add('focused');
        } else {
          container.classList.remove('focused');
        }
      };

      field.addEventListener('focus', updateFloatingLabel);
      field.addEventListener('blur', updateFloatingLabel);
      field.addEventListener('input', updateFloatingLabel);
      updateFloatingLabel();
    });
  }

  private async handleSubmit(): Promise<void> {
    // Validate all fields
    let isValid = true;
    this.fields.forEach((field) => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    if (!isValid) {
      this.showFormError('Please fix the errors above');
      return;
    }

    // Show loading state
    this.showLoadingState();

    try {
      // Simulate API call
      await this.simulateFormSubmission();
      this.showSuccessState();
    } catch (error) {
      this.showFormError('Something went wrong. Please try again.');
    }
  }

  private showLoadingState(): void {
    const submitBtn = this.form.querySelector('.btn-submit') as HTMLButtonElement;
    if (!submitBtn) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <i class="fas fa-spinner fa-spin"></i>
      <span>Sending...</span>
    `;
  }

  private showSuccessState(): void {
    // Create success modal
    const successModal = document.createElement('div');
    successModal.className = 'form-success-modal';
    successModal.innerHTML = `
      <div class="success-content">
        <div class="success-icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <h3>Message Sent Successfully!</h3>
        <p>Thank you for your message. We'll get back to you soon.</p>
        <button class="btn-primary-custom" onclick="this.closest('.form-success-modal').remove()">
          Close
        </button>
      </div>
    `;

    document.body.appendChild(successModal);
    setTimeout(() => successModal.classList.add('show'), 100);

    // Reset form
    this.form.reset();
    this.fields.forEach((field) => this.clearFieldError(field));
    
    // Reset submit button
    const submitBtn = this.form.querySelector('.btn-submit') as HTMLButtonElement;
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <i class="fas fa-paper-plane"></i>
        <span>Send Message</span>
      `;
    }
  }

  private showFormError(message: string): void {
    // Remove existing error
    const existingError = this.form.querySelector('.form-error');
    if (existingError) existingError.remove();

    const errorElement = document.createElement('div');
    errorElement.className = 'form-error';
    errorElement.innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      <span>${message}</span>
    `;

    this.form.insertBefore(errorElement, this.form.firstChild);
    setTimeout(() => errorElement.classList.add('show'), 10);
  }

  private simulateFormSubmission(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }
}

interface ValidationRule {
  type: string;
  value?: number;
  message: string;
}

// Auto-initialize forms
export const initForms = () => {
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    new FormValidator(`#${form.id || 'contact-form'}`);
  });
}; 