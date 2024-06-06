/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/thread_program.json`.
 */
export type ThreadProgram = {
  "address": "5mWnTLUXiCtNbyTrniAEoPwuXVzQPM7VYr8yYaMaNhf2",
  "name": "threadProgram",
  "version": "2.0.20",
  "spec": "0.1.0",
  "description": "Clockwork thread program",
  "repository": "https://github.com/clockwork-xyz/clockwork",
  "metadata": {
    "name": "threadProgram",
    "version": "2.0.20",
    "spec": "0.1.0",
    "description": "Clockwork thread program",
    "repository": "https://github.com/clockwork-xyz/clockwork"
  },
  "docs": [
    "Program for creating transaction threads on Solana."
  ],
  "instructions": [
    {
      "name": "getCrateInfo",
      "docs": [
        "Return the crate information via `sol_set_return_data/sol_get_return_data`"
      ],
      "discriminator": [
        59,
        15,
        145,
        204,
        119,
        170,
        30,
        158
      ],
      "accounts": [
        {
          "name": "systemProgram"
        }
      ],
      "args": [],
      "returns": {
        "defined": {
          "name": "crateInfo"
        }
      }
    },
    {
      "name": "threadCreate",
      "docs": [
        "Creates a new transaction thread."
      ],
      "discriminator": [
        54,
        1,
        238,
        224,
        71,
        244,
        252,
        173
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "The authority (owner) of the thread."
          ],
          "signer": true
        },
        {
          "name": "payer",
          "docs": [
            "The payer for account initializations."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana system program."
          ]
        },
        {
          "name": "thread",
          "docs": [
            "The thread to be created."
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "id",
          "type": "bytes"
        },
        {
          "name": "instructions",
          "type": {
            "vec": {
              "defined": {
                "name": "serializableInstruction"
              }
            }
          }
        },
        {
          "name": "trigger",
          "type": {
            "defined": {
              "name": "trigger"
            }
          }
        }
      ]
    },
    {
      "name": "threadDelete",
      "docs": [
        "Closes an existing thread account and returns the lamports to the owner."
      ],
      "discriminator": [
        146,
        6,
        95,
        17,
        35,
        98,
        44,
        140
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "The authority (owner) of the thread."
          ],
          "signer": true
        },
        {
          "name": "closeTo",
          "docs": [
            "The address to return the data rent lamports to."
          ],
          "writable": true
        },
        {
          "name": "thread",
          "docs": [
            "The thread to be delete."
          ],
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "threadExec",
      "docs": [
        "Executes the next instruction on thread."
      ],
      "discriminator": [
        141,
        79,
        219,
        140,
        125,
        246,
        162,
        160
      ],
      "accounts": [
        {
          "name": "fee",
          "docs": [
            "The worker's fee account."
          ],
          "writable": true
        },
        {
          "name": "pool",
          "docs": [
            "The active worker pool."
          ]
        },
        {
          "name": "signatory",
          "docs": [
            "The signatory."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "thread",
          "docs": [
            "The thread to execute."
          ],
          "writable": true
        },
        {
          "name": "worker",
          "docs": [
            "The worker."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "threadInstructionAdd",
      "docs": [
        "Appends a new instruction to the thread's instruction set."
      ],
      "discriminator": [
        105,
        117,
        243,
        157,
        61,
        226,
        87,
        201
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "The authority (owner) of the thread."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana system program"
          ]
        },
        {
          "name": "thread",
          "docs": [
            "The thread to be paused."
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "instruction",
          "type": {
            "defined": {
              "name": "serializableInstruction"
            }
          }
        }
      ]
    },
    {
      "name": "threadInstructionRemove",
      "docs": [
        "Removes an instruction to the thread's instruction set at the provied index."
      ],
      "discriminator": [
        87,
        114,
        175,
        98,
        217,
        155,
        188,
        31
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "The authority (owner) of the thread."
          ],
          "signer": true
        },
        {
          "name": "thread",
          "docs": [
            "The thread to be edited."
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u64"
        }
      ]
    },
    {
      "name": "threadKickoff",
      "docs": [
        "Kicks off a thread if its trigger condition is active."
      ],
      "discriminator": [
        34,
        80,
        5,
        128,
        197,
        187,
        14,
        20
      ],
      "accounts": [
        {
          "name": "signatory",
          "docs": [
            "The signatory."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "thread",
          "docs": [
            "The thread to kickoff."
          ],
          "writable": true
        },
        {
          "name": "worker",
          "docs": [
            "The worker."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "threadPause",
      "docs": [
        "Pauses an active thread."
      ],
      "discriminator": [
        197,
        134,
        59,
        33,
        129,
        130,
        102,
        246
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "The authority (owner) of the thread."
          ],
          "signer": true
        },
        {
          "name": "thread",
          "docs": [
            "The thread to be paused."
          ],
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "threadReset",
      "docs": [
        "Resets a thread's next instruction."
      ],
      "discriminator": [
        187,
        185,
        155,
        37,
        161,
        74,
        117,
        0
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "The authority (owner) of the thread."
          ],
          "signer": true
        },
        {
          "name": "thread",
          "docs": [
            "The thread to be paused."
          ],
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "threadResume",
      "docs": [
        "Resumes a paused thread."
      ],
      "discriminator": [
        142,
        165,
        20,
        133,
        151,
        201,
        32,
        183
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "The authority (owner) of the thread."
          ],
          "signer": true
        },
        {
          "name": "thread",
          "docs": [
            "The thread to be resumed."
          ],
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "threadUpdate",
      "docs": [
        "Allows an owner to update the mutable properties of a thread."
      ],
      "discriminator": [
        62,
        117,
        199,
        78,
        253,
        104,
        20,
        52
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "The authority (owner) of the thread."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "The Solana system program"
          ]
        },
        {
          "name": "thread",
          "docs": [
            "The thread to be updated."
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "settings",
          "type": {
            "defined": {
              "name": "threadSettings"
            }
          }
        }
      ]
    },
    {
      "name": "threadWithdraw",
      "docs": [
        "Allows an owner to withdraw from a thread's lamport balance."
      ],
      "discriminator": [
        210,
        190,
        114,
        194,
        186,
        179,
        184,
        176
      ],
      "accounts": [
        {
          "name": "authority",
          "docs": [
            "The authority (owner) of the thread."
          ],
          "signer": true
        },
        {
          "name": "payTo",
          "docs": [
            "The account to withdraw lamports to."
          ],
          "writable": true
        },
        {
          "name": "thread",
          "docs": [
            "The thread to be."
          ],
          "writable": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "fee",
      "discriminator": [
        24,
        55,
        150,
        250,
        168,
        27,
        101,
        178
      ]
    },
    {
      "name": "pool",
      "discriminator": [
        241,
        154,
        109,
        4,
        17,
        177,
        109,
        188
      ]
    },
    {
      "name": "thread",
      "discriminator": [
        186,
        27,
        154,
        111,
        51,
        36,
        159,
        90
      ]
    },
    {
      "name": "worker",
      "discriminator": [
        224,
        158,
        97,
        5,
        224,
        241,
        67,
        146
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidThreadResponse",
      "msg": "The exec response could not be parsed"
    },
    {
      "code": 6001,
      "name": "invalidThreadState",
      "msg": "The thread is in an invalid state"
    },
    {
      "code": 6002,
      "name": "invalidTriggerVariant",
      "msg": "The trigger variant cannot be changed"
    },
    {
      "code": 6003,
      "name": "triggerConditionFailed",
      "msg": "The trigger condition has not been activated"
    },
    {
      "code": 6004,
      "name": "threadBusy",
      "msg": "This operation cannot be processes because the thread is currently busy"
    },
    {
      "code": 6005,
      "name": "threadPaused",
      "msg": "The thread is currently paused"
    },
    {
      "code": 6006,
      "name": "rateLimitExeceeded",
      "msg": "The thread's rate limit has been reached"
    },
    {
      "code": 6007,
      "name": "maxRateLimitExceeded",
      "msg": "Thread rate limits cannot exceed the maximum allowed value"
    },
    {
      "code": 6008,
      "name": "unauthorizedWrite",
      "msg": "Inner instruction attempted to write to an unauthorized address"
    },
    {
      "code": 6009,
      "name": "withdrawalTooLarge",
      "msg": "Withdrawing this amount would leave the thread with less than the minimum required SOL for rent exemption"
    }
  ],
  "types": [
    {
      "name": "clockData",
      "docs": [
        "The clock object, representing a specific moment in time recorded by a Solana cluster."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "slot",
            "docs": [
              "The current slot."
            ],
            "type": "u64"
          },
          {
            "name": "epoch",
            "docs": [
              "The bank epoch."
            ],
            "type": "u64"
          },
          {
            "name": "unixTimestamp",
            "docs": [
              "The current unix timestamp."
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "crateInfo",
      "docs": [
        "Crate build information"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "spec",
            "docs": [
              "The link to the crate spec"
            ],
            "type": "string"
          },
          {
            "name": "blob",
            "docs": [
              "Arbitrary blob that can be set by developers"
            ],
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "equality",
      "docs": [
        "Operators for describing how to compare two values to one another."
      ],
      "repr": {
        "kind": "rust"
      },
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "greaterThanOrEqual"
          },
          {
            "name": "lessThanOrEqual"
          }
        ]
      }
    },
    {
      "name": "execContext",
      "docs": [
        "The execution context of a particular transaction thread."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "execIndex",
            "docs": [
              "Index of the next instruction to be executed."
            ],
            "type": "u64"
          },
          {
            "name": "execsSinceReimbursement",
            "docs": [
              "Number of execs since the last tx reimbursement.",
              "To be deprecated in v3 since we now reimburse for every transaction."
            ],
            "type": "u64"
          },
          {
            "name": "execsSinceSlot",
            "docs": [
              "Number of execs in this slot."
            ],
            "type": "u64"
          },
          {
            "name": "lastExecAt",
            "docs": [
              "Slot of the last exec"
            ],
            "type": "u64"
          },
          {
            "name": "triggerContext",
            "docs": [
              "Context for the triggering condition"
            ],
            "type": {
              "defined": {
                "name": "triggerContext"
              }
            }
          }
        ]
      }
    },
    {
      "name": "fee",
      "docs": [
        "Escrows the lamport balance owed to a particular worker."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "distributableBalance",
            "docs": [
              "The number of lamports that are distributable for this epoch period."
            ],
            "type": "u64"
          },
          {
            "name": "worker",
            "docs": [
              "The worker who received the fees."
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "pool",
      "docs": [
        "* Pool"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "size",
            "type": "u32"
          },
          {
            "name": "workers",
            "type": {
              "vec": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "serializableAccount",
      "docs": [
        "Account metadata needed to execute an instruction on Solana."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "docs": [
              "An account's public key"
            ],
            "type": "pubkey"
          },
          {
            "name": "isSigner",
            "docs": [
              "True if an Instruction requires a Transaction signature matching `pubkey`."
            ],
            "type": "bool"
          },
          {
            "name": "isWritable",
            "docs": [
              "True if the `pubkey` can be loaded as a read-write account."
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "serializableInstruction",
      "docs": [
        "The data needed execute an instruction on Solana."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programId",
            "docs": [
              "Pubkey of the instruction processor that executes this instruction"
            ],
            "type": "pubkey"
          },
          {
            "name": "accounts",
            "docs": [
              "Metadata for what accounts should be passed to the instruction processor"
            ],
            "type": {
              "vec": {
                "defined": {
                  "name": "serializableAccount"
                }
              }
            }
          },
          {
            "name": "data",
            "docs": [
              "Opaque data passed to the instruction processor"
            ],
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "thread",
      "docs": [
        "Tracks the current state of a transaction thread on Solana."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The owner of this thread."
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "The bump, used for PDA validation."
            ],
            "type": "u8"
          },
          {
            "name": "createdAt",
            "docs": [
              "The cluster clock at the moment the thread was created."
            ],
            "type": {
              "defined": {
                "name": "clockData"
              }
            }
          },
          {
            "name": "execContext",
            "docs": [
              "The context of the thread's current execution state."
            ],
            "type": {
              "option": {
                "defined": {
                  "name": "execContext"
                }
              }
            }
          },
          {
            "name": "fee",
            "docs": [
              "The number of lamports to payout to workers per execution."
            ],
            "type": "u64"
          },
          {
            "name": "id",
            "docs": [
              "The id of the thread, given by the authority."
            ],
            "type": "bytes"
          },
          {
            "name": "instructions",
            "docs": [
              "The instructions to be executed."
            ],
            "type": {
              "vec": {
                "defined": {
                  "name": "serializableInstruction"
                }
              }
            }
          },
          {
            "name": "name",
            "docs": [
              "The name of the thread."
            ],
            "type": "string"
          },
          {
            "name": "nextInstruction",
            "docs": [
              "The next instruction to be executed."
            ],
            "type": {
              "option": {
                "defined": {
                  "name": "serializableInstruction"
                }
              }
            }
          },
          {
            "name": "paused",
            "docs": [
              "Whether or not the thread is currently paused."
            ],
            "type": "bool"
          },
          {
            "name": "rateLimit",
            "docs": [
              "The maximum number of execs allowed per slot."
            ],
            "type": "u64"
          },
          {
            "name": "trigger",
            "docs": [
              "The triggering event to kickoff a thread."
            ],
            "type": {
              "defined": {
                "name": "trigger"
              }
            }
          }
        ]
      }
    },
    {
      "name": "threadSettings",
      "docs": [
        "The properties of threads which are updatable."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fee",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "instructions",
            "type": {
              "option": {
                "vec": {
                  "defined": {
                    "name": "serializableInstruction"
                  }
                }
              }
            }
          },
          {
            "name": "name",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "rateLimit",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "trigger",
            "type": {
              "option": {
                "defined": {
                  "name": "trigger"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "trigger",
      "docs": [
        "The triggering conditions of a thread."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "account",
            "fields": [
              {
                "name": "address",
                "docs": [
                  "The address of the account to monitor."
                ],
                "type": "pubkey"
              },
              {
                "name": "offset",
                "docs": [
                  "The byte offset of the account data to monitor."
                ],
                "type": "u64"
              },
              {
                "name": "size",
                "docs": [
                  "The size of the byte slice to monitor (must be less than 1kb)"
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "cron",
            "fields": [
              {
                "name": "schedule",
                "docs": [
                  "The schedule in cron syntax. Value must be parsable by the `clockwork_cron` package."
                ],
                "type": "string"
              },
              {
                "name": "skippable",
                "docs": [
                  "Boolean value indicating whether triggering moments may be skipped if they are missed (e.g. due to network downtime).",
                  "If false, any \"missed\" triggering moments will simply be executed as soon as the network comes back online."
                ],
                "type": "bool"
              }
            ]
          },
          {
            "name": "now"
          },
          {
            "name": "slot",
            "fields": [
              {
                "name": "slot",
                "type": "u64"
              }
            ]
          },
          {
            "name": "epoch",
            "fields": [
              {
                "name": "epoch",
                "type": "u64"
              }
            ]
          },
          {
            "name": "timestamp",
            "fields": [
              {
                "name": "unixTs",
                "type": "i64"
              }
            ]
          },
          {
            "name": "pyth",
            "fields": [
              {
                "name": "priceFeed",
                "docs": [
                  "The address of the price feed to monitor."
                ],
                "type": "pubkey"
              },
              {
                "name": "equality",
                "docs": [
                  "The equality operator (gte or lte) used to compare prices."
                ],
                "type": {
                  "defined": {
                    "name": "equality"
                  }
                }
              },
              {
                "name": "limit",
                "docs": [
                  "The limit price to compare the Pyth feed to."
                ],
                "type": "i64"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "triggerContext",
      "docs": [
        "The event which allowed a particular transaction thread to be triggered."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "account",
            "fields": [
              {
                "name": "dataHash",
                "docs": [
                  "The account's data hash."
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "cron",
            "fields": [
              {
                "name": "startedAt",
                "docs": [
                  "The threshold moment the schedule was waiting for."
                ],
                "type": "i64"
              }
            ]
          },
          {
            "name": "now"
          },
          {
            "name": "slot",
            "fields": [
              {
                "name": "startedAt",
                "docs": [
                  "The threshold slot the schedule was waiting for."
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "epoch",
            "fields": [
              {
                "name": "startedAt",
                "docs": [
                  "The threshold epoch the schedule was waiting for."
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "timestamp",
            "fields": [
              {
                "name": "startedAt",
                "docs": [
                  "The threshold moment the schedule was waiting for."
                ],
                "type": "i64"
              }
            ]
          },
          {
            "name": "pyth",
            "fields": [
              {
                "name": "price",
                "type": "i64"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "worker",
      "docs": [
        "worker"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The worker's authority (owner)."
            ],
            "type": "pubkey"
          },
          {
            "name": "commissionBalance",
            "docs": [
              "The number of lamports claimable by the authority as commission for running the worker."
            ],
            "type": "u64"
          },
          {
            "name": "commissionRate",
            "docs": [
              "Integer between 0 and 100 determining the percentage of fees worker will keep as commission."
            ],
            "type": "u64"
          },
          {
            "name": "id",
            "docs": [
              "The worker's id."
            ],
            "type": "u64"
          },
          {
            "name": "signatory",
            "docs": [
              "The worker's signatory address (used to sign txs)."
            ],
            "type": "pubkey"
          },
          {
            "name": "totalDelegations",
            "docs": [
              "The number delegations allocated to this worker."
            ],
            "type": "u64"
          }
        ]
      }
    }
  ]
};
