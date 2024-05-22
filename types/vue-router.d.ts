import "vue-router"

declare module "vue-router" {
  interface RouteMeta {
    /**
     * 设置该页面的标题
     */
    title?: string
  }
}