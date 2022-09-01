namespace SpriteKind {
    export const attack = SpriteKind.create()
    export const attack_2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mySprite.setPosition(74, 52)
    tiles.setTilemap(tilemap`level11`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    tiles.setTilemap(tilemap`level4`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . 9 . . . . . . . . . 
        . . . . . . . . d . . . . . . . 
        . . 9 . . . . . . . . . . . . . 
        . . . . 9 . d . . 9 . . . . . . 
        . . . . 9 d d 1 . 1 . . . . . . 
        . 9 . d 1 1 1 d 1 d d 9 . . . . 
        . . . 9 d d 1 d 1 d d 9 . . . . 
        . . 9 1 d 1 1 1 1 9 d 1 . . . . 
        . . . 9 d 9 1 9 1 d d d . . . . 
        . . . . 9 1 1 1 d 9 d 1 . . . . 
        . 9 . . 9 1 1 1 d 1 . . . . . . 
        . . . 9 1 d 9 d . . 9 . . 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . 9 . . . . . . . . . 
        . . . . . . . . d . . . . . . . 
        . . 9 . . . . . . . . . . . . . 
        . . . . 9 . d . . 9 . . . . . . 
        . . . . 9 d d 1 . 1 . . . . . . 
        . 9 . d 1 1 1 d 1 d d 9 . . . . 
        . . . 9 d d 1 d 1 d d 9 . . . . 
        . . 9 1 d 1 1 1 1 9 d 1 . . . . 
        . . . 9 d 9 1 9 1 d d d . . . . 
        . . . . 9 1 1 1 d 9 d 1 . . . . 
        . 9 . . 9 1 1 1 d 1 . . . . . . 
        . . . 9 1 d 9 d . . 9 . . 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -50, 50)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . 9 . . . . . . . . . 
        . . . . . . . . d . . . . . . . 
        . . 9 . . . . . . . . . . . . . 
        . . . . 9 . d . . 9 . . . . . . 
        . . . . 9 d d 1 . 1 . . . . . . 
        . 9 . d 1 1 1 d 1 d d 9 . . . . 
        . . . 9 d d 1 d 1 d d 9 . . . . 
        . . 9 1 d 1 1 1 1 9 d 1 . . . . 
        . . . 9 d 9 1 9 1 d d d . . . . 
        . . . . 9 1 1 1 d 9 d 1 . . . . 
        . 9 . . 9 1 1 1 d 1 . . . . . . 
        . . . 9 1 d 9 d . . 9 . . 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, -50)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . 9 . . . . . . . . . 
        . . . . . . . . d . . . . . . . 
        . . 9 . . . . . . . . . . . . . 
        . . . . 9 . d . . 9 . . . . . . 
        . . . . 9 d d 1 . 1 . . . . . . 
        . 9 . d 1 1 1 d 1 d d 9 . . . . 
        . . . 9 d d 1 d 1 d d 9 . . . . 
        . . 9 1 d 1 1 1 1 9 d 1 . . . . 
        . . . 9 d 9 1 9 1 d d d . . . . 
        . . . . 9 1 1 1 d 9 d 1 . . . . 
        . 9 . . 9 1 1 1 d 1 . . . . . . 
        . . . 9 1 d 9 d . . 9 . . 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -50, -50)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    tiles.setTilemap(tilemap`level10`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.play()
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f 1 1 1 1 1 1 f . . . . . 
        . . . f 1 f 1 1 f 1 f . . . . . 
        . . . f 1 2 1 1 2 1 f . . . . . 
        . . . f f 2 1 1 1 f f . . . . . 
        . . . f f 2 f f 2 f f . . . . . 
        . . . f f 1 1 1 2 f f . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 50)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f 1 1 1 1 1 1 f . . . . . 
        . . . f 1 f 1 1 f 1 f . . . . . 
        . . . f 1 2 1 1 2 1 f . . . . . 
        . . . f f 2 1 1 1 f f . . . . . 
        . . . f f 2 f f 2 f f . . . . . 
        . . . f f 1 1 1 2 f f . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f 1 1 1 1 1 1 f . . . . . 
        . . . f 1 f 1 1 f 1 f . . . . . 
        . . . f 1 2 1 1 2 1 f . . . . . 
        . . . f f 2 1 1 1 f f . . . . . 
        . . . f f 2 f f 2 f f . . . . . 
        . . . f f 1 1 1 2 f f . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -50, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f 1 1 1 1 1 1 f . . . . . 
        . . . f 1 f 1 1 f 1 f . . . . . 
        . . . f 1 2 1 1 2 1 f . . . . . 
        . . . f f 2 1 1 1 f f . . . . . 
        . . . f f 2 f f 2 f f . . . . . 
        . . . f f 1 1 1 2 f f . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -50)
    projectile.setKind(SpriteKind.attack)
})
scene.onOverlapTile(SpriteKind.attack, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.startCountdown(1)
})
scene.onOverlapTile(SpriteKind.attack, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setTilemap(tilemap`level12`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    tiles.setTilemap(tilemap`level5`)
    game.splash("hooray! you win!", "was it fun?")
    game.splash("give feedback plz", "it will help us improve  the game and give you a better time!")
    game.splash("the end", "and also you are trapped!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    game.reset()
})
sprites.onOverlap(SpriteKind.attack_2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.attack_2)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTilemap(tilemap`level9`)
    game.splash("wah-", "how did ya-")
    game.splash("fine! keep playin'", "AND GO HOME!!!")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.startCountdown(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTilemap(tilemap`level13`)
    info.changeScoreBy(5)
    info.stopCountdown()
    game.splash("THE END")
    music.footstep.loop()
})
sprites.onOverlap(SpriteKind.attack, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.attack)
    info.changeScoreBy(1)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    tiles.setTilemap(tilemap`level5`)
    music.wawawawaa.playUntilDone()
    game.splash("you win", "and also you are trapped!")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.startCountdown(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setTilemap(tilemap`level7`)
    game.splash("lets fight!")
    myEnemy = sprites.create(img`
        . . . . 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        . . . 1 1 1 1 1 1 . . . 
        . . . 1 1 . . 1 1 . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
    mySprite.setPosition(18, 55)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.setTilemap(tilemap`level3`)
    mySprite3.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    mySprite.setPosition(76, 56)
    tiles.setCurrentTilemap(tilemap`level17`)
    story.printDialog("the choice is your's", 80, 90, 50, 150)
    game.splash("do you want to kill")
    game.splash("or do you want to look for more endings of this game")
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let projectile2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666666666667777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777666666eeeeee6666677777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666777776666eeeeeeeeeee66667777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777776777766777666eeeeeeeeeeeeee6666777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777776666666667777777777777777777777677777767666eeeeeeeeeeeeeeeee66777777777777777777777777777777777777777777777
    777777777777776666777777777777777777777777777777666666777677767777777777777777777777677777767666eeeeeedddddeeeeee66677777777777777777777777777777777777777777777
    777777777777767677777777777777777777777777777777677677777767767777777777777777777777677777767666eeeeddddddddeeeee66677777767777777777777777777777777777777777777
    777777777777666677777777777776677777777777777776766777777767767777777777777777777777677777767777eeeddfffddfffddd777777777767777777777667777777777777777777777777
    777777777777667777777777777766677777777777777776667777777767767777777777777777777777677777667777eeeddfffddfffddd777777777766677777777667777777777777777777777777
    7777777777766677777777777777677677777777777777667777777777676777777777777777777777776666666777777ddddfffddfffddd777777777776677777776667777777777777777777777777
    7777777777766777777777777777677666777777777777667777777776667777777777777777777777767777776777777ddddddddddddddd777777777777667777766677777777777777777777777777
    7777777777667777777777777776677776667777777777667777777766767777777777777777777777767777776777777ddddddddddddddd777777777777667777666777777777777777777777777777
    7777777777667777777777777776777666666777777777667777777666677777777777777777777777767777776777777ddddddddddddddd777777777777766777667777777777777777777777777777
    77777777776677777777777777666667666666677777776677777766677777777777777777777777776677777767777777ddddd2222dddd7777777777777776666677777777777777777777777777777
    77777777776677777777777776666666677667677777776666666666777777777777777777777777776777777677777777ddddd2222dddd7777777777777777666677777777777777777777777777777
    777777777766777777777777766777777777667777777766776666777777777777777777777777777767777776777777777dddd2222ddd77777777777777777766777777777777777777777777777777
    77777777776677777777777776677777777776777777776666677777777777777777777777777777776777777677777777777ddddddd7777777777777777777766777777777777777777777777777777
    7777777777667777777777776677777777777777777777666777777777777777777777777777777777677777767777777777777777777777777777777777777667777777777777777777777777777777
    7777777777666777777777776677777777777777777777666777777777777777777777777777777777667776677777777777777777777777777777777777777677777777777777777777777777777777
    7777777777766677777777776777777777777777777777667777777777777777777777777777777777766666777777777777777777777777777777777777777677777777777777777777777777777777
    7777777777777666666777777777777777777777777777667777777777777777777777777777777777777777777777777777777777777777777777777777776677777777777777777777777777777777
    7777777777777776677777777777777777777777777777677777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777
    7777777777777777776666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777777777777777
    7777777777777776667777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666677777777777777777777777
    7777777777766667777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777776777777777777777777777777766666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777776777777777777777777777777767776677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777776777777777777777777777776677777767777777777777777777676777777777777777777777666666666677777777777777777777777777777777777777777777
    7777777777777777777777777777776777777777777777777777766777777776777777777777777776677677777777777777777776777777777677777777777777777777777777777777777777777777
    7777777777777777777777777777776777777777777777777777767777777776777777777777777776777767777777777777777776777777777677777777777777777777777777777777777777777777
    7777777777777777777777777777776777777777777777777777677777777776777777777777777776777767777777777777777776777777777767777777777777777777777777777777777777777777
    7777777777777777777777777777776777777777777777777777677777777776777777777777777776777776777777777777777776777777777767777777777777777777777777777777777777777777
    7777777777777777777777777777776777777777777777777776777777777776777777777777777776777777677777777777777776777777777767777777777777777777777777777777777777777777
    7777777777777777777777777777776777777777777777777776777777777776777777777777777767777777766777777777777776777777777776777777777777777777777777777777777777777777
    7777777777777777777777777777776777777777777777777767777777777767777777777777777767777666667777777777777776777777777776777777777777777777777777777777777777777777
    7777777777777777777777777777776777777777777777777767777777777767777777777777777766666777776777777777777776777777777776777777777777777777777777777777777777777777
    7777777777777777777777777777776777777776667777777776777777777677777777777777777677777777777677777777777776777777777776777777777777777777777777777777777777777777
    7777777777777777777777777777776777777667777777777777677777766777777777777777777677777777777767777777777766777777777776777777777777777777777777777777777777777777
    7777777777777777777777777777776777776777777777777777666666677777777777777777777677777777777766777777777767777777777777677777777777777777777777777777777777777777
    7777777777777777777777777777776777667777777777777777777777777777777777777777777677777777777776777777777767777777777777677777777777777777777777777777777777777777
    7777777777777777777777777777776666777777777777777777777777777777777777777777777677777777777777777777777767777777777776677777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777767777777776667777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777667777777777777777777777767777776667777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777767666667777777777777777777777777777777777777777777777777
    7777777777777777777777777766666666666666666777777777777777777777777777777777777777777777777777777777777766677777777777777677777777777777777777777777777777777777
    7777777777777777777777777777777777777777777666666667777777777777777777777777777777777777777777777777777766777777777777777677777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777776666666666777777777777777777777777777777777666666666666666666666666666677777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777666666666666666666666666666666666777777676677777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777667777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
music.baDing.playUntilDone()
music.baDing.playUntilDone()
music.baDing.playUntilDone()
if (info.score() > 16) {
    info.startCountdown(1)
}
game.splash("a is attack")
game.splash("b is also attack")
game.splash("a + b is a combo")
game.splash("hope you like pixels")
game.splash(".")
game.splash("..")
game.splash("...")
info.setScore(0)
info.startCountdown(180)
let mySprite2 = sprites.create(assets.image`you`, SpriteKind.Player)
mySprite = sprites.create(assets.image`you`, SpriteKind.Player)
mySprite2.follow(mySprite)
scene.setBackgroundImage(img`
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666886666666666666666666666666666666666666666666666666666666866666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666686666666666666668866666666666666666666666666666666666666666666666666666668866666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666668886666666666686666666666666666666866666666666666666666666666666666666886666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666668888888888886666666666666666666686666666666666666666666666666666888666666666666666666666666666866666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666668866666666666666666666666666688666666666666666666666666666666688666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666688866666666666666666666688866666666666666666666666666666666666886666666666666666666666666666666666666668666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666688888888888888888888866666666666666666666666666666666666666668866666666666666666666666666666668888886666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666688886666666666666666666666688886666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666668888888666666666666668866666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666888888888888886666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666866666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666866666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666668666666666666666666666666666666666666666666666666666666666666666686666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666886666666666666666666666666666666666666666666666666666666666666668666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666668866666666666666666666666666666666666666666666666666666666666668666666666666666666666666666666666666666666666886666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666688666666666666666666666666688666666666666666666666666666666666866666666666666666666666666666666666666666688866666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666866666666666666666666666688866666666666666666666666666666666866666666666666666666666666666666666666668866666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666688888888666666666666688866666666666666666666666666666666666688666666666666666666666666666666666666888666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666888888888888866666666666666666666666666666666666666666886666666666666666666666666666688888666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666668888888866666666666666666688866666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666688888888888888888866666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    66666666666666668888886666666666666666666666866666666666666666666666666666666666666666666666666666686666666666666666666666666666666666666666666666666668888666669999999999999999999999999999999999999999
    66666666666666666666668886666666666666666666866666666666666666666666866666666666666666666666666666888666666666666666666666666688888666666666666666666688666666669999999999999999999999999999999999999999
    66666666666666666666666668888666666666666888866666666666666666666666688888666666666666666666666888666666666666666666666666666666666888666666666666668866666666669999999999999999999999999999999999999999
    66666666666666666666666666666888888888888666666666666666666666666666666666888666666666666688888666666666666666666666666666666666666666888886666666688666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666888888888888866666666666666666666666666666666666666666666666668888888886666666666669999999999999999999999999999999999999999
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
tiles.setTilemap(tilemap`level8`)
mySprite3 = sprites.create(img`
    ...fffffffffffffffffffffffffffffffff....
    ..feeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddf...
    .feeeeeeeeeeeeeeeeeeeeeeeeeeeefbdbbbdf..
    .feeeeeeeeeeeeeeeeeeeeeeeeeeeefdbbdbbdf.
    feeeeeeeeeeeeeeeeeeeeeeeeeeeefbdbdbdbdf.
    feeeeeeeeeeeeeeeeeeeeeeeeeeeefdbdbdbdbdf
    feeeeeeeeeeeeeeeeeeeeeeeeeeeefdbdbdbdbdf
    feeeeeeeeeeeeeeeeeeeeeeeeeeeefdbdbdbdbdf
    feeeeeeeeeeeeeeeeeeeeeeeeeeeefdbdbdbdbdf
    feeeeeeeeeeeeeeeeeeeeeeeeeeeefbdbdbdbdf.
    .feeeeeeeeeeeeeeeeeeeeeeeeeeeefdbbdbbdf.
    .feeeeeeeeeeeeeeeeeeeeeeeeeeeefbdbbbdf..
    ..feeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddf...
    ...fffffffffffffffffffffffffffffffff....
    `, SpriteKind.Player)
mySprite3.setPosition(116, 19)
mySprite.setPosition(134, 89)
animation.runImageAnimation(
mySprite,
[img`
    2 . . . e e e e e e . . . . 
    . . . e e e e e e e e . . . 
    . . . e d f d d f d e . . . 
    . . . e d f d d f d e . . . 
    . . . d d d d d d d d . . . 
    . . . 6 d d 2 2 d d 6 . . . 
    . . . 6 6 d d d d 6 6 . . . 
    . . . 6 6 6 6 6 6 6 6 . . . 
    . . 6 6 6 6 6 6 6 6 6 6 . . 
    6 6 6 6 6 e e e 6 6 6 6 6 6 
    6 6 6 e e e 6 e e e e 6 6 6 
    6 6 . 6 6 e e e 6 6 6 . 6 6 
    . . . 6 6 6 6 6 6 6 6 . . . 
    . . . e e e . . e e e . . . 
    . . . e e e . . e e e . . . 
    `,img`
    . . . . e e e e e e . . . . 
    . . . e e e e e e e e . . . 
    . . . e d f d d f d e . . . 
    . . . e d f d d f d e . . . 
    . . . d d d d d d d d . . . 
    . . . 6 d d 2 2 d d 6 . . . 
    . . . 6 6 d d d d 6 6 . . . 
    . . 6 6 6 6 6 6 6 6 6 6 . . 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 e e e 6 6 6 6 6 6 
    6 6 . e e e 6 e e e e . 6 6 
    . . . 6 6 e e e 6 6 6 . . . 
    . . . 6 6 6 6 6 6 6 6 . . . 
    . . . e e e . . e e e . . . 
    . . . e e e . . e e e . . . 
    `,img`
    . . . . e e e e e e . . . . 
    . . . e e e e e e e e . . . 
    . . . e d d d d d d e . . . 
    . . . e d f d d f d e . . . 
    . . . d d d d d d d d . . . 
    . . . 6 d d 2 2 d d 6 . . . 
    . . . 6 6 d d d d 6 6 . . . 
    . . . 6 6 6 6 6 6 6 6 . . . 
    . . 6 6 6 6 6 6 6 6 6 6 . . 
    6 6 6 6 6 e e e 6 6 6 6 6 6 
    6 6 6 e e e 6 e e e e 6 6 6 
    6 6 . 6 6 e e e 6 6 6 . 6 6 
    . . . 6 6 6 6 6 6 6 6 . . . 
    . . . e e e . . e e e . . . 
    . . . e e e . . e e e . . . 
    `,img`
    . . . . e e e e e e . . . . 
    . . . e e e e e e e e . . . 
    . . . e d f d d f d e . . . 
    . . . e d f d d f d e . . . 
    . . . d d d d d d d d . . . 
    . . . 6 d d 2 2 d d 6 . . . 
    . . . 6 6 d d d d 6 6 . . . 
    . . 6 6 6 6 6 6 6 6 6 6 . . 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 e e e 6 6 6 6 6 6 
    6 6 . e e e 6 e e e e . 6 6 
    . . . 6 6 e e e 6 6 6 . . . 
    . . . 6 6 6 6 6 6 6 6 . . . 
    . . . e e e . . e e e . . . 
    . . . e e e . . e e e . . . 
    `,img`
    . . . . e e e e e e . . . . 
    . . . e e e e e e e e . . . 
    . . . e d f d d f d e . . . 
    . . . e d f d d f d e . . . 
    . . . d d d d d d d d . . . 
    . . . 6 d d 2 2 d d 6 . . . 
    . . . 6 6 d d d d 6 6 . . . 
    . . . 6 6 6 6 6 6 6 6 . . . 
    . . 6 6 6 6 6 6 6 6 6 6 . . 
    6 6 6 6 6 e e e 6 6 6 6 6 6 
    6 6 6 e e e 6 e e e e 6 6 6 
    6 6 . 6 6 e e e 6 6 6 . 6 6 
    . . . 6 6 6 6 6 6 6 6 . . . 
    . . . e e e . . e e e . . . 
    . . . e e e . . e e e . . . 
    `,img`
    . . . . e e e e e e . . . . 
    . . . e e e e e e e e . . . 
    . . . e d d d d d d e . . . 
    . . . e d f d d f d e . . . 
    . . . d d d d d d d d . . . 
    . . . 6 d d 2 2 d d 6 . . . 
    . . . 6 6 d d d d 6 6 . . . 
    . . 6 6 6 6 6 6 6 6 6 6 . . 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 e e e 6 6 6 6 6 6 
    6 6 . e e e 6 e e e e . 6 6 
    . . . 6 6 e e e 6 6 6 . . . 
    . . . 6 6 6 6 6 6 6 6 . . . 
    . . . e e e . . e e e . . . 
    . . . e e e . . e e e . . . 
    `],
500,
true
)
effects.clouds.startScreenEffect()
forever(function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("C C5 B A G F E C ", 207)
        music.playMelody("C5 C5 B G E C C5 C5 ", 207)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("C5 A B A F A C5 B ", 207)
        music.playMelody("F A B C5 C5 B A - ", 207)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("C5 G A B G A B C5 ", 207)
        music.playMelody("C5 G A B G A B C5 ", 207)
    }
})
forever(function () {
    if (info.score() == 10) {
        myEnemy.destroy()
    }
})
forever(function () {
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
})
