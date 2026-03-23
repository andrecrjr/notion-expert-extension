/**
 * MCP-safe logger that suppresses output in stdio mode
 * to avoid interfering with JSON-RPC communication
 */
export declare class McpLogger {
    private static isStdioMode;
    /**
     * Log debug information (only in non-stdio mode)
     */
    static debug(message: string, ...args: any[]): void;
    /**
     * Log info messages (only in non-stdio mode)
     */
    static info(message: string, ...args: any[]): void;
    /**
     * Log warning messages (only in non-stdio mode)
     */
    static warn(message: string, ...args: any[]): void;
    /**
     * Log error messages (only in non-stdio mode)
     * Errors during tool execution should be returned via MCP error responses, not console
     */
    static error(message: string, ...args: any[]): void;
    /**
     * Log to stderr - always outputs (for critical errors)
     * Use sparingly in stdio mode
     */
    static critical(message: string, ...args: any[]): void;
    /**
     * Check if currently in stdio mode
     */
    static isStdio(): boolean;
    /**
     * Update stdio mode (for runtime changes)
     */
    static setStdioMode(enabled: boolean): void;
}
export declare const logger: typeof McpLogger;
//# sourceMappingURL=mcp-logger.d.ts.map