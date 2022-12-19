/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/users": {
    /**
     * List 
     * @description List all users
     */
    get: operations["getUsers"];
    /**
     * Update 
     * @description Update a user
     */
    put: operations["updateUsers"];
    /**
     * Create 
     * @description Create a user
     */
    post: operations["createUsers"];
  };
  "/users/{userId}": {
    /**
     * Detail 
     * @description Info for a specific user
     */
    get: operations["getUser"];
  };
  "/users/friends": {
    /**
     * List 
     * @description List all friends in users
     */
    get: operations["getFriends"];
    /**
     * Create 
     * @description Create a friend
     */
    post: operations["createFriend"];
  };
  "/users/friends/{friendId}": {
    /**
     * Get 
     * @description Info for a specific friend
     */
    get: operations["getFriend"];
    /**
     * Delete 
     * @description Delete a friend
     */
    delete: operations["deleteFriend"];
  };
  "/me": {
    /**
     * Me 
     * @description Get me
     */
    get: operations["getMe"];
  };
  "/health": {
    get: operations["checkHealth"];
  };
}

export type webhooks = Record<string, never>;

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
     *       "name": "name",
     *       "id": "id"
     *     },
     *     {
     *       "personality": "personality",
     *       "name": "name",
     *       "id": "id"
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
      friends?: (components["schemas"]["Friend"])[];
    };
    Error: {
      /** Format: int32 */
      code: number;
      message: string;
    };
    /**
     * @example {
     *   "personality": "personality",
     *   "name": "name",
     *   "id": "id"
     * }
     */
    Friend: {
      id: string;
      name: string;
      personality: string;
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
    /** @description unexpected error */
    UnexpectedError: {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
    /** @description success */
    Success: {
      content: {
        "application/json": components["schemas"]["updateUsers_200_response"];
      };
    };
    /** @description Empty response */
    EmptyResponse: never;
  };
  parameters: {
    /** @description How many items to return at one time (max 100) */
    limit: number;
    /** @description The id of the user to retrieve */
    userId: string;
    /** @description The id of the friend to retrieve */
    friendId: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  getUsers: {
    /**
     * List 
     * @description List all users
     */
    parameters?: {
        /** @description How many items to return at one time (max 100) */
      query?: {
        limit?: number;
      };
    };
    responses: {
      /** @description A paged array of users */
      200: {
        content: {
          "application/json": (components["schemas"]["User"])[];
        };
      };
      /** @description unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  updateUsers: {
    /**
     * Update 
     * @description Update a user
     */
    responses: {
      /** @description success */
      200: {
        content: {
          "application/json": components["schemas"]["updateUsers_200_response"];
        };
      };
      /** @description Empty response */
      201: never;
      /** @description unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  createUsers: {
    /**
     * Create 
     * @description Create a user
     */
    responses: {
      /** @description success */
      200: {
        content: {
          "application/json": components["schemas"]["updateUsers_200_response"];
        };
      };
      /** @description Empty response */
      201: never;
      /** @description unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getUser: {
    /**
     * Detail 
     * @description Info for a specific user
     */
    parameters: {
        /** @description The id of the user to retrieve */
      path: {
        userId: string;
      };
    };
    responses: {
      /** @description Expected response to a valid request */
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getFriends: {
    /**
     * List 
     * @description List all friends in users
     */
    parameters?: {
        /** @description How many items to return at one time (max 100) */
      query?: {
        limit?: number;
      };
    };
    responses: {
      /** @description A paged array of friends in users */
      200: {
        content: {
          "application/json": (components["schemas"]["Friend"])[];
        };
      };
      /** @description unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  createFriend: {
    /**
     * Create 
     * @description Create a friend
     */
    responses: {
      /** @description success */
      200: {
        content: {
          "application/json": components["schemas"]["updateUsers_200_response"];
        };
      };
      /** @description Empty response */
      201: never;
      /** @description unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getFriend: {
    /**
     * Get 
     * @description Info for a specific friend
     */
    parameters: {
        /** @description The id of the friend to retrieve */
      path: {
        friendId: string;
      };
    };
    responses: {
      /** @description Expected response to a valid request */
      200: {
        content: {
          "application/json": components["schemas"]["Friend"];
        };
      };
      /** @description unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  deleteFriend: {
    /**
     * Delete 
     * @description Delete a friend
     */
    parameters: {
        /** @description The id of the friend to retrieve */
      path: {
        friendId: string;
      };
    };
    responses: {
      /** @description success */
      200: {
        content: {
          "application/json": components["schemas"]["updateUsers_200_response"];
        };
      };
      /** @description Empty response */
      201: never;
      /** @description unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  getMe: {
    /**
     * Me 
     * @description Get me
     */
    responses: {
      /** @description Expected response to a valid request */
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description unexpected error */
      default: {
        content: {
          "application/json": components["schemas"]["Error"];
        };
      };
    };
  };
  checkHealth: {
    responses: {
      /** @description OK */
      200: never;
      /** @description NOT FOUND */
      404: never;
    };
  };
}
