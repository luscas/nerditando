/**
 *  _  _                  _   _   _                      _
 * | \| |  ___   _ _   __| | (_) | |_   __ _   _ _    __| |  ___
 * | .` | / -_) | '_| / _` | | | |  _| / _` | | ' \  / _` | / _ \
 * |_|\_| \___| |_|   \__,_| |_|  \__| \__,_| |_||_| \__,_| \___/
 *
 * @author Lucas Bueno <contact@lucasdev.co.uk>
 * @link twitter.com/eitabueno # lucasdev.co.uk # github.com/luscas
 * @version v0.0.1
*/

{
	var app = angular.module('nerditando', ['ngRoute']);

	app.controller('LoginController', function($scope) {
		$scope.status = 'ON';
		$scope.change = function() {
			if( $scope.status == 'ON' ) {
				$scope.status = 'OFF';
			} else if( $scope.status == 'OFF' ) {
				$scope.status = 'ON';
			}
		}
	});

	jQuery(document).ready(function($) {
		$(document).on('click', 'a[href="#"]', function(e) {
			$('html, body').animate({ scrollTop : 0 }, 250);
			e.preventDefault();
		});

		$(document).on('click', '.login .avatar', function(e) {
			if( $(this).find('.dropdown').hasClass('hide') ) {
				$(this).find('.dropdown').fadeIn(150).removeClass('hide').addClass('show');
			} else {
				$(this).find('.dropdown').fadeOut(150).removeClass('show').addClass('hide');
			}

			e.preventDefault();
		});

		$(document).on('click', '.dropdown, .login .avatar', function(e) {
			e.stopPropagation();
		});

		$(document).on('click', 'body', function(e) {
			$('* .dropdown').fadeOut(150).removeClass('show').addClass('hide');
		});

		$(document).on('click', '.alert .close', function(e) {
			$(this).parent().fadeOut(150);
			e.preventDefault();
		});

		$('[data-mt]').each(function() {
			$(this).css('margin-top', $(this).data('mt') + 'px');
		});
	});
};