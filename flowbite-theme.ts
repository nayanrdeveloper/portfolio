import type { CustomFlowbiteTheme } from 'flowbite-react';

const flowbiteTheme: CustomFlowbiteTheme = {
    tabs: {
        base: 'flex flex-col gap-2',
        tablist: {
            base: 'flex text-center',
            styles: {
                default:
                    'flex-wrap border-b border-gray-200 dark:border-gray-700',
                underline:
                    'flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700',
                pills: 'flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2',
                fullWidth:
                    'w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none',
            },
            tabitem: {
                base: 'flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none',
                styles: {
                    default: {
                        base: 'rounded-t-lg',
                        active: {
                            on: 'bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500',
                            off: 'text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300',
                        },
                    },
                    underline: {
                        base: 'rounded-t-lg',
                        active: {
                            on: 'text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500',
                            off: 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
                        },
                    },
                    pills: {
                        base: '',
                        active: {
                            on: 'rounded-lg bg-cyan-600 text-white',
                            off: 'rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
                        },
                    },
                    fullWidth: {
                        base: 'ml-0 first:ml-0 w-full rounded-none flex',
                        active: {
                            on: 'p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none',
                            off: 'bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none',
                        },
                    },
                },
                icon: 'mr-2 h-5 w-5',
            },
        },
        tabitemcontainer: {
            base: '',
            styles: {
                default: '',
                underline: '',
                pills: '',
                fullWidth: '',
            },
        },
        tabpanel: 'py-3',
    },
    timeline: {
        root: {
            direction: {
                horizontal: 'items-base sm:flex',
                vertical:
                    'relative border-l border-gray-200 dark:border-gray-700',
            },
        },
        item: {
            root: {
                horizontal: 'relative mb-6 sm:mb-0',
                vertical: 'mb-10 ml-6',
            },
            content: {
                root: {
                    base: 'mt-3 sm:pr-8',
                },
                body: {
                    base: 'mb-4 text-base font-normal text-gray-500 dark:text-gray-400',
                },
                time: {
                    base: 'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
                },
                title: {
                    base: 'text-lg font-semibold text-gray-900 dark:text-white',
                },
            },
            point: {
                horizontal: 'flex items-center',
                line: 'hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex',
                marker: {
                    base: {
                        horizontal:
                            'absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700',
                        vertical:
                            'absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700',
                    },
                    icon: {
                        base: 'h-3 w-3 text-cyan-600 dark:text-cyan-300',
                        wrapper:
                            'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900',
                    },
                },
                vertical: '',
            },
        },
    },
    progress: {
        base: 'w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700',
        label: 'mb-1 flex justify-between font-medium dark:text-white',
        bar: 'rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100 space-x-2',
        color: {
            red: 'bg-yellow-400',
        },
        size: {
            sm: 'h-1.5',
            md: 'h-2.5',
            lg: 'h-4',
            xl: 'h-6',
        },
    },
};

export default flowbiteTheme;
