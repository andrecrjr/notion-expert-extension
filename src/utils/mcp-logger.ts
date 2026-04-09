// MCP-safe logger that respects stdio mode
// In MCP stdio mode, console output can interfere with JSON-RPC communication

import { isMcpStdioMode } from '../credentials.js';

/**
 * MCP-safe logger that suppresses output in stdio mode
 * to avoid interfering with JSON-RPC communication
 */
export class McpLogger {
  private static isStdioMode = isMcpStdioMode();

  /**
   * Log debug information (only in non-stdio mode)
   */
  static debug(message: string, ...args: any[]): void {
    if (!this.isStdioMode) {
      console.debug(message, ...args);
    }
  }

  /**
   * Log info messages (only in non-stdio mode)
   */
  static info(message: string, ...args: any[]): void {
    if (!this.isStdioMode) {
      console.info(message, ...args);
    }
  }

  /**
   * Log warning messages (only in non-stdio mode)
   */
  static warn(message: string, ...args: any[]): void {
    if (!this.isStdioMode) {
      console.warn(message, ...args);
    }
  }

  /**
   * Log error messages (only in non-stdio mode)
   * Errors during tool execution should be returned via MCP error responses, not console
   */
  static error(message: string, ...args: any[]): void {
    if (!this.isStdioMode) {
      console.error(message, ...args);
    }
  }

  /**
   * Log to stderr - always outputs (for critical errors)
   * Use sparingly in stdio mode
   */
  static critical(message: string, ...args: any[]): void {
    console.error(message, ...args);
  }

  /**
   * Check if currently in stdio mode
   */
  static isStdio(): boolean {
    return this.isStdioMode;
  }

  /**
   * Update stdio mode (for runtime changes)
   */
  static setStdioMode(enabled: boolean): void {
    this.isStdioMode = enabled;
  }
}

// Convenience exports for direct use
export const logger = McpLogger;
