//your code here
class OutOfRangeError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = 'Expression should only consist of integers and +-/* characters.';
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = 'Expression should not have an invalid combination of expressions.';
  }
}

// Example usage
function evaluateExpression(expression) {
  try {
    // Check for invalid characters
    if (!/^[-+\/*\d\s]+$/.test(expression)) {
      throw new OutOfRangeError();
    }

    // Check for invalid expression combinations
    if (expression.includes('++') || expression.includes('--') || expression.includes('+-') || expression.includes('-+')) {
      throw new InvalidExprError();
    }

    // Perform evaluation
    // ...
  } catch (error) {
    console.error(error.name + ': ' + error.message);
  }
}

// Test cases
evaluateExpression('1 + 2 * 3');        // No error
evaluateExpression('1 + 2 * a');        // OutOfRangeError
evaluateExpression('1 + + 2');          // InvalidExprError
evaluateExpression('4 - -5 * 2');       // No error
