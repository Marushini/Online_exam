export function Audit(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Audit: ${propertyKey} was called at ${new Date().toISOString()}`);
    return original.apply(this, args);
  };
}
