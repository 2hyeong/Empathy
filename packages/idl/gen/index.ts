/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/users": {
    /** List all users */
    get: operations["getUsers"];
    /** Update a user */
    put: operations["updateUsers"];
    /** Create a user */
    post: operations["createUsers"];
  };
  "/users/{userId}": {
    /** Info for a specific user */
    get: operations["getUser"];
  };
  "/users/friends": {
    /** List all friends in users */
    get: operations["getFriends"];
    /** Create a friend */
    post: operations["createFriend"];
    /** Delete a friend */
    delete: operations["deleteFriend"];
  };
  "/me": {
    /** Get me */
    get: operations["getMe"];
  };
  "/health": {
    get: operations["checkHealth"];
  };
}

export interface components {
  schemas: {
    /**
     * @example {
     *   "birthday": "birthday",
     *   "age_range": "age_range",
     *   "image": "image",
     *   "personality": "personality",
     *   "gender": "gender",
     *   "name": "name",
     *   "id": "id",
     *   "friends": [
     *     {
     *       "personality": "personality",
     *       "name": "name"
     *     },
     *     {
     *       "personality": "personality",
     *       "name": "name"
     *     }
     *   ]
     * }
     */
    User: {
      id?: string;
      name?: string;
      birthday?: string;
      personality?: string;
      gender?: string;
      age_range?: string;
      image?: string;
      friends?: components["schemas"]["Friend"][];
    };
    Error: {
      /** Format: int32 */
      code: number;
      message: string;
    };
    /**
     * @example {
     *   "personality": "personality",
     *   "name": "name"
     * }
     */
    Friend: {
      name?: string;
      personality?: string;
    };
    /**
     * @example {
     *   "ok": true
     * }
     */
    updateUsers_200_response: {
      ok: boolean;
    };
  };
  responses: {
    /** unexpected error */
    UnexpectedError: {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
    /** success */
    Success: {
      content: {
        "application/json": components["schemas"]["updateUsers_200_response"];
      };
    };
    /** Empty response */
    EmptyResponse: unknown;
  };
  parameters: {
    /** @description How many items to return at one time (max 100) */
    limit: number;
    /** @description The id of the user to retrieve */
    userId: string;
  };
}

export interface operations {
  /** List all users */
  getUsers: {
    parameters: {
      query: {
        /** How many items to return at one time (max 100) */
        limit?: number;
      };
    };
    responses: {
      /** A paged array of users */
      200: {
        content: {
          "application/json": components["schemas"]["User"][];
        };
      };
      /** unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Update a user */
  updateUsers: {
    responses: {
      /** success */
      200: {
        content: {
          "application/json": components["schemas"]["updateUsers_200_response"];
        };
      };
      /** Empty response */
      201: unknown;
      /** unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Create a user */
  createUsers: {
    responses: {
      /** success */
      200: {
        content: {
          "application/json": components["schemas"]["updateUsers_200_response"];
        };
      };
      /** Empty response */
      201: unknown;
      /** unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Info for a specific user */
  getUser: {
    parameters: {
      path: {
        /** The id of the user to retrieve */
        userId: string;
      };
    };
    responses: {
      /** Expected response to a valid request */
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** List all friends in users */
  getFriends: {
    parameters: {
      query: {
        /** How many items to return at one time (max 100) */
        limit?: number;
      };
    };
    responses: {
      /** A paged array of friends in users */
      200: {
        content: {
          "application/json": components["schemas"]["Friend"][];
        };
      };
      /** unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Create a friend */
  createFriend: {
    responses: {
      /** success */
      200: {
        content: {
          "application/json": components["schemas"]["updateUsers_200_response"];
        };
      };
      /** Empty response */
      201: unknown;
      /** unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Delete a friend */
  deleteFriend: {
    responses: {
      /** success */
      200: {
        content: {
          "application/json": components["schemas"]["updateUsers_200_response"];
        };
      };
      /** Empty response */
      201: unknown;
      /** unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  /** Get me */
  getMe: {
    responses: {
      /** Expected response to a valid request */
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  checkHealth: {
    responses: {
      /** OK */
      200: unknown;
      /** NOT FOUND */
      404: unknown;
    };
  };
}

export interface external {}
